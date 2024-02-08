<script setup>
import { reactive } from "vue";

const formInputs = reactive({
  email: "",
  password: "",
  jwt: "",
  showError: false,
  errorOutput: false,
  disableBtn: false,
  loginSuccessful: false,
});

const submit = () => {
  formInputs.showError = true;
  if (isFormValid()) {
    formInputs.disableBtn = true;
    const user = {
      email: formInputs.email,
      password: formInputs.password,
    };

    fetch("http://170.205.36.233:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Результат:", data);
        formInputs.disableBtn = false;
        formInputs.loginSuccessful = true;
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        console.log("Результат:", data);
        formInputs.disableBtn = false;
      });
  } else {
    console.log("Форма заполнена некорректно");
    formInputs.errorOutput = true;
  }
};

const isEmailValid = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(formInputs.email);
};

const isPasswordValid = () => {
  return formInputs.password.trim() !== "";
};

const isFormValid = () => {
  return isEmailValid() && isPasswordValid();
};
</script>

<template>
  <div class="contact-form form-group">
    <form
      v-if="!formInputs.loginSuccessful"
      @submit.prevent.stop="submit"
      id="contact"
      action=""
      method="POST"
    >
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <fieldset>
            <input
              v-model="formInputs.email"
              name="email"
              type="email"
              :class="{
                'form-control': true,
                error: formInputs.showError && !isEmailValid(),
              }"
              id="email"
              placeholder="E-Mail"
              required
            />
          </fieldset>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <fieldset>
            <input
              v-model="formInputs.password"
              name="password"
              type="password"
              :class="{
                'form-control': true,
                error: formInputs.showError && !isPasswordValid(),
              }"
              id="password"
              placeholder="Пароль"
              required
            />
          </fieldset>
        </div>

        <div class="col-lg-12">
          <p class="password-lost">
            Забыли пароль?
            <span @click="$emit('reset-password')"> Восстановить</span>
          </p>
          <!-- <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input-checkbox"
                type="checkbox"
                id="gridCheck"
                required
              />
              <label class="form-check-label" for="gridCheck">
                Я согласен на
                <a class="form-check-privacy-policy" href="">
                  обработку персональных данных
                </a>
              </label>
            </div>
          </div> -->
        </div>

        <div
          v-if="formInputs.errorOutput && !isFormValid()"
          class="col-lg-12 error-block"
        >
          <p>Форма заполнена некорректно:</p>
          <p v-if="!isEmailValid()">Email введен некорректно</p>
          <p v-if="!isPasswordValid()">Пароль введен некорректно</p>
        </div>

        <div class="col-lg-12">
          <fieldset>
            <button
              type="submit"
              id="form-submit"
              class="border-button"
              :disabled="formInputs.disableBtn"
            >
              Вход
            </button>
          </fieldset>
        </div>
      </div>
    </form>
    <p v-else class="successful-registration">Успешно</p>
  </div>
</template>

<style scoped>
.error {
  border: 2px solid red !important;
}

.error-block {
  margin: 20px 0;
  background-color: rgba(66, 40, 139, 1);
  border-radius: 40px;
}

.error-block p {
  color: white;
}

.successful-registration {
  padding: 20px;
  background-color: rgba(66, 40, 139, 1);
  color: white;
  border-radius: 30px;
}

.password-lost {
  color: white;
  margin-bottom: 20px;
  margin-top: -20px;
}
.password-lost span {
  color: white;
}
.password-lost span:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>

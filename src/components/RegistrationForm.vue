<script setup>
import { reactive } from "vue";

const formInputs = reactive({
  name: "",
  email: "",
  password: "",
  password_repeat: "",
  showError: false,
  errorOutput: false,
  disableBtn: false,
  registrationSuccessful: false,
  registrationError: false,
});

const submit = () => {
  formInputs.showError = true;
  if (isFormValid()) {
    formInputs.disableBtn = true;
    const user = {
      name: formInputs.name,
      email: formInputs.email,
      password: formInputs.password,
      phone: "",
    };
    fetch("http://170.205.36.233:8000/register/", {
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
        formInputs.registrationSuccessful = true;
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        formInputs.registrationError = true;
        formInputs.disableBtn = false;
      });
  } else {
    console.log("Форма заполнена некорректно");
    formInputs.errorOutput = true;
  }
};

const isNameValid = () => {
  return formInputs.name.trim() !== "";
};

const isEmailValid = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(formInputs.email);
};

const isPasswordValid = () => {
  return formInputs.password.trim() !== "";
};

const isPasswordMatch = () => {
  return formInputs.password === formInputs.password_repeat;
};

const isFormValid = () => {
  return (
    isNameValid() && isEmailValid() && isPasswordValid() && isPasswordMatch()
  );
};
</script>

<template>
  <div class="contact-form form-group">
    <form
      v-if="!formInputs.registrationSuccessful"
      @submit.prevent.stop="submit"
      id="contact"
      action=""
      method="POST"
    >
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <fieldset>
            <input
              v-model="formInputs.name"
              name="name"
              type="text"
              class="form-control"
              :class="{ error: formInputs.showError && !isNameValid() }"
              id="name"
              placeholder="Ваше имя"
              required
            />
          </fieldset>
        </div>
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
              placeholder="Придумайте пароль"
              required
            />
          </fieldset>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <fieldset>
            <input
              v-model="formInputs.password_repeat"
              name="password_repeat"
              type="password"
              :class="{
                'form-control': true,
                error: formInputs.showError && !isPasswordMatch(),
              }"
              id="password_repeat"
              placeholder="Повторите пароль"
              required
            />
          </fieldset>
        </div>
        <div class="col-lg-12">
          <div class="form-group">
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
          </div>
        </div>

        <div
          v-if="formInputs.errorOutput && !isFormValid()"
          class="col-lg-12 error-block"
        >
          <p>Форма заполнена некорректно:</p>
          <p v-if="!isNameValid()">Не введено имя</p>
          <p v-if="!isEmailValid()">Email введен некорректно</p>
          <p v-if="!isPasswordValid()">Пароль введен некорректно</p>
          <p v-if="!isPasswordMatch()">Пароли не совпадают</p>
        </div>

        <div v-if="formInputs.registrationError" class="col-lg-12 error-block">
          <p>Ошибка регистрации</p>
        </div>

        <div class="col-lg-12">
          <fieldset>
            <button
              type="submit"
              id="form-submit"
              class="border-button"
              :disabled="formInputs.disableBtn"
            >
              Зарегистрироваться
            </button>
          </fieldset>
        </div>
      </div>
    </form>
    <p v-else class="successful-registration">Вы зарегистрированы</p>
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
</style>

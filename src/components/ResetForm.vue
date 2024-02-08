<script setup>
import { reactive } from "vue";

const formInputs = reactive({
  email: "",
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
    const data = {
      email: formInputs.email,
    };

    fetch("http://170.205.36.233:8000/password_reset/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
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

const isFormValid = () => {
  return isEmailValid();
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
            <button
              type="submit"
              id="form-submit"
              class="reset-button"
              :disabled="formInputs.disableBtn"
            >
              Сбросить
            </button>
          </fieldset>
        </div>
      </div>
    </form>
    <p v-else class="successful-registration">
      Ссылка для сброса пароля отправлена.
      <span @click="$emit('login-view')">Вернуть ко входу</span>
    </p>
  </div>
</template>

<style scoped>
.reset-button {
  max-width: 223px;
  width: 100%;
  padding: 10px;
  background: #42288b;
  font-size: 13px;
  color: white;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
.successful-registration {
  color: white;
  font-size: 18px;
}
.successful-registration span:hover {
  cursor: pointer;
  text-decoration: underline;
}

@media screen and (max-width: 992px) {
  .reset-button {
    max-width: none;
    width: 100%;
  }
}
</style>

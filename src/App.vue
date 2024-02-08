<script setup>
import { RouterLink, RouterView } from "vue-router";
import Dropdown from "./components/Dropdown.vue";
import RegistrationForm from "./components/RegistrationForm.vue";
import LoginForm from "./components/LoginForm.vue";
import ResetForm from "./components/ResetForm.vue";
import { ref, onMounted } from "vue";

const selectedLanguage = ref("");
const translations = ref({});
const langArr = ref({});

let showRegistrationForm = ref(true);
const formType = ref("registration");

const toggleForm = (value) => {
  formType.value = value;
};

const translate = (key) => {
  return translations.value[key] || "";
};

const updateLanguage = (data) => {
  selectedLanguage.value = data.selectedLang;
  translations.value = data.translations;

  for (let i = 0; i < translations.value.length; i++) {
    const element = $(`.dynamicText[data-key="${translations.value[i].key}"]`);
    if (element.length > 0) {
      element.text(translations.value[i].text);
    }
  }
};

onMounted(() => {});
</script>

<template>
  <body>
    <div id="preloader">
      <div class="jumper">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <!-- Header -->
    <div class="sub-header">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-xs-12">
            <ul class="left-info">
              <li>
                <a href="#" class="black-color"
                  ><i class="fa fa-clock-o dark-color"></i>Mon-Fri
                  09:00-17:00</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-phone dark-color"></i>090-080-0760</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <Dropdown @languageChanged="updateLanguage"></Dropdown>
          </div>
        </div>
      </div>
    </div>
    <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html"
            ><img
              class="logo-img"
              src="./assets/images/lotusLogo.png"
              alt="Lotus"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link dynamicText" href="#top" data-key="menu1"
                  >Главная
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dynamicText"
                  href="#fun_facts"
                  data-key="menu2"
                  >Выплаты</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dynamicText"
                  href="#more_info"
                  data-key="menu3"
                  >О нас</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dynamicText"
                  href="#callback_form"
                  data-key="menu4"
                  >Связаться</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Page Content -->
    <!-- Banner Starts Here -->
    <div class="main-banner header-text" id="top">
      <div class="Modern-Slider">
        <!-- Item -->
        <div class="item item-1">
          <div class="img-fill">
            <div class="text-content">
              <h4 class="dynamicText" data-key="title1">ЗАГОЛОВОК</h4>
              <h4 class="dynamicText" data-key="title2">данного блока</h4>
              <p data-key="sub_title" class="dynamicText">
                Подзаголовок данного блока расположен тут в одну-две строчки
              </p>
              <a
                data-key="enter"
                href="#callback_form"
                class="filled-button white-button dynamicText"
                >ВОЙТИ</a
              >
              <a
                data-key="signup"
                href="#callback_form"
                class="filled-button black-button dynamicText"
                >ЗАРЕГИСТРИРОВАТЬСЯ</a
              >
            </div>
          </div>
        </div>
        <!-- // Item -->
        <!-- Item -->
        <div class="item item-2">
          <div class="img-fill">
            <div class="text-content">
              <h4 class="dynamicText" data-key="title1">ЗАГОЛОВОК</h4>
              <h4 class="dynamicText" data-key="title2">ДАННОГО БЛОКА</h4>
              <p class="dynamicText" data-key="sub_title">
                Подзаголовок данного блока расположен тут в одну-две строчки
              </p>
              <a
                data-key="enter"
                href="#callback_form"
                class="filled-button white-button dynamicText"
                >ВОЙТИ</a
              >
              <a
                data-key="signup"
                href="#callback_form"
                class="filled-button black-button dynamicText"
                >ЗАРЕГИСТРИРОВАТЬСЯ</a
              >
            </div>
          </div>
        </div>
        <!-- // Item -->
        <!-- Item -->
        <div class="item item-3">
          <div class="img-fill">
            <div class="text-content">
              <h4 data-key="title1" class="dynamicText">ЗАГОЛОВОК</h4>
              <h4 data-key="title2" class="dynamicText">ДАННОГО БЛОКА</h4>
              <p data-key="sub_title" class="dynamicText">
                Подзаголовок данного блока расположен тут в одну-две строчки
              </p>
              <a
                data-key="enter"
                href="#callback_form"
                class="filled-button white-button dynamicText"
                >ВОЙТИ</a
              >
              <a
                data-key="signup"
                href="contact.html"
                class="filled-button black-button dynamicText"
                >ЗАРЕГИСТРИРОВАТЬСЯ</a
              >
            </div>
          </div>
        </div>
        <!-- // Item -->
      </div>
    </div>
    <!-- Banner Ends Here -->

    <div class="fun-facts" id="fun_facts">
      <div class="container col-md-10">
        <div class="row">
          <div class="col-md-6">
            <div class="left-content">
              <h2 class="dynamicText" data-key="solutions1">
                Our solutions for your
              </h2>
              <h2 class="dynamicText solutions2-text" data-key="solutions2">
                business growth
              </h2>
              <p class="dynamicText" data-key="solutions_more">
                Pellentesque ultrices at turpis in vestibulum. Aenean pretium
                elit nec congue elementum. Nulla luctus laoreet porta. Maecenas
                at nisi tempus, porta metus vitae, faucibus augue.
                <br /><br />Fusce et venenatis ex. Quisque varius, velit quis
                dictum sagittis, odio velit molestie nunc, ut posuere ante
                tortor ut neque.
              </p>
            </div>
          </div>
          <div class="col-md-6 align-self-center">
            <div class="row">
              <div class="col-xl-6 col-md-12">
                <div class="count-area-content">
                  <div class="count-area-content-line">
                    <div
                      class="count-digit dynamicText"
                      data-key="Invested_last_year_numbers"
                    >
                      110245
                    </div>
                    <h6>$</h6>
                  </div>
                  <div
                    class="count-title dynamicText"
                    data-key="Invested_last_year"
                  >
                    Invested last year
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-md-12">
                <div class="count-area-content">
                  <div class="count-area-content-line">
                    <div
                      class="count-digit dynamicText"
                      data-key="total_return_numbers"
                    >
                      128.7
                    </div>
                    <h6>%</h6>
                  </div>
                  <div class="count-title dynamicText" data-key="total_return">
                    Total return
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="count-area-content count-area-content-bottom">
                  <div class="count-area-content-line">
                    <div
                      class="count-digit dynamicText"
                      data-key="total_paid_this_month"
                    >
                      1782
                    </div>
                    <h6>$</h6>
                  </div>
                  <div
                    class="count-title dynamicText"
                    data-key="Paid_this_month"
                  >
                    Paid this month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="more-info" id="more_info">
      <div class="container">
        <div class="row content-center">
          <div class="col-md-10">
            <div class="more-info-content">
              <div class="row">
                <div class="col-md-6">
                  <div class="left-image">
                    <img src="./assets/images/more-info.png" alt="" />
                  </div>
                </div>
                <div class="col-md-6 align-self-center">
                  <div class="right-content">
                    <span data-key="who_we" class="dynamicText"
                      >Кто мы такие?</span
                    >
                    <h2 data-key="lotus_Invest_company1" class="dynamicText">
                      Lotus Invest
                    </h2>
                    <h2
                      data-key="lotus_Invest_company2"
                      class="dynamicText company-text-2"
                    >
                      company
                    </h2>
                    <p class="dynamicText" data-key="description">
                      Это азиатский криптовалютный инвестиционный фонд,
                      базирующийся в динамичном и инновационном финансовом
                      центре Сингапура. Мы специализируемся на инвестициях в
                      перспективные криптовалютные проекты, проложив путь к
                      финансовой свободе для наших клиентов
                    </p>
                    <a
                      href="#callback_form"
                      data-key="go_signup"
                      class="filled-button dynamicText"
                      >Перейти к регистрации</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="partners">
      <a href="" class="filled-button dynamicText" data-key="our_partners"
        >Наши партнеры:</a
      >
      <div class="partner-line">
        <img
          class="partner-line__img"
          src="./assets/images/client-01.png"
          alt="binance"
        />
        <div class="partner-line__vertical_bar"></div>
        <img
          class="partner-line__img"
          src="./assets/images/client-02.png"
          alt="binance"
        />
        <div class="partner-line__vertical_bar"></div>
        <img
          class="partner-line__img"
          src="./assets/images/client-03.png"
          alt="binance"
        />
        <div class="partner-line__vertical_bar"></div>
        <img
          class="partner-line__img"
          src="./assets/images/client-04.png"
          alt="binance"
        />
        <div class="partner-line__vertical_bar"></div>
        <img
          class="partner-line__img"
          src="./assets/images/client-05.png"
          alt="binance"
        />
      </div>
    </div>

    <div class="callback-form" id="callback_form">
      <div class="container">
        <div class="row content-center">
          <div class="col-md-12">
            <div class="section-heading" v-if="formType === 'registration'">
              <h2 data-key="signup_now" class="dynamicText">
                Зарегистрируйтесь, прямо сейчас!
              </h2>
              <div class="register-under-line">
                <span data-key="have_account" class="dynamicText"
                  >УЖЕ ЕСТЬ АККАУНТ?</span
                >
                <a
                  class="dynamicText form-enter-link"
                  data-key="enter"
                  href="#"
                  @click.prevent="toggleForm('login')"
                  >ВОЙТИ</a
                >
              </div>
            </div>
            <div class="section-heading" v-if="formType === 'login'">
              <h2 data-key="signup_now" class="dynamicText">Вход в аккаунт:</h2>
              <div class="register-under-line">
                <span data-key="have_account" class="dynamicText">НАЗАД К</span>
                <a
                  class="dynamicText form-enter-link"
                  data-key="enter"
                  href="#"
                  @click.prevent="toggleForm('registration')"
                  >РЕГИСТРАЦИЯ</a
                >
              </div>
            </div>
            <div class="section-heading" v-if="formType === 'reset'">
              <h2 data-key="signup_now" class="dynamicText">
                Восстановление пароля
              </h2>
              <div class="register-under-line">
                <div class="flex">
                  <a
                    class="dynamicText form-enter-link"
                    data-key="enter"
                    href="#"
                    @click.prevent="toggleForm('login')"
                    >ВЕРНУТЬСЯ КО ВХОДУ</a
                  >
                  <a
                    class="dynamicText form-enter-link"
                    data-key="enter"
                    href="#"
                    @click.prevent="toggleForm('registration')"
                    >РЕГИСТРАЦИЯ</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <RegistrationForm v-if="formType === 'registration'" />
            <LoginForm
              @reset-password="toggleForm('reset')"
              v-if="formType === 'login'"
            />
            <ResetForm
              @login-view="toggleForm('login')"
              v-if="formType === 'reset'"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Starts Here -->
    <!-- <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-3 footer-item">
            <h4>Finance Business</h4>
            <p>
              Vivamus tellus mi. Nulla ne cursus elit,vulputate. Sed ne cursus
              augue hasellus lacinia sapien vitae.
            </p>
            <ul class="social-icons">
              <li>
                <a
                  rel="nofollow"
                  href="https://fb.com/templatemo"
                  target="_blank"
                  ><i class="fa fa-facebook"></i
                ></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-linkedin"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-behance"></i></a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 footer-item">
            <h4>Useful Links</h4>
            <ul class="menu-list">
              <li><a href="#">Vivamus ut tellus mi</a></li>
              <li><a href="#">Nulla nec cursus elit</a></li>
              <li><a href="#">Vulputate sed nec</a></li>
              <li><a href="#">Cursus augue hasellus</a></li>
              <li><a href="#">Lacinia ac sapien</a></li>
            </ul>
          </div>
          <div class="col-md-3 footer-item">
            <h4>Additional Pages</h4>
            <ul class="menu-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">How We Work</a></li>
              <li><a href="#">Quick Support</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer> -->
  </body>
</template>

<style scoped>
h4[data-key="title2"] {
  margin-top: -32px;
}
.flex {
  display: flex;
  align-items: center;
  gap: 36px;
}
</style>

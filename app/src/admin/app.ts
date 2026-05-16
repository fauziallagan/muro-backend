// @ts-ignore
import "./extensions/custom.css";

// @ts-ignore
import AuthLogo from "./extensions/logos.png";

// @ts-ignore
import MenuLogo from "./extensions/logos.png";

const TITLE = "Muro Admin";

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },

    menu: {
      logo: MenuLogo,
    },

    locales: [],

    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Muro Admin",

        "Auth.form.welcome.title": "Multimedia & Robotics Laboratory",

        "Auth.form.welcome.subtitle": "Admin Panel",

        "Auth.link.forgot-password": "Forgot Password?",

        "Auth.form.email.label": "Email Address",

        "Auth.form.password.label": "Secure Password",

        "Auth.form.button.login": "Login",
      },
    },
  },

  bootstrap() {
    const updateTitle = () => {
      if (document.title !== TITLE) {
        document.title = TITLE;
      }
    };

    updateTitle();

    setInterval(updateTitle, 500);
  },
};

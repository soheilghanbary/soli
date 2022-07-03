import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter()
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav className={`flex justify-between flex-col xl:flex-row lg:flex-row text-center gap-6 items-center mb-8 ${router.locale === 'en' ? 'xl:text-left lg:text-left' : 'xl:text-right lg:text-right'}`}>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-medium animate__animated animate__fadeInUp">{t("title")}</h1>
        <h3 className="text-lg animate__animated animate__fadeInUp">{t("description")}</h3>
      </div>
      <div className="flex gap-3 items-center">
        <button onClick={toggleTheme} className="btn fifth">
          <span>{router.locale === 'fa' ? 'تم' : 'Theme'}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Link href={"/"} locale={router.locale === 'en' ? 'fa' : 'en'}>
          <button className="btn fifth secondary">
            <span>{router.locale === 'fa' ? 'English' : 'فارسی'}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;

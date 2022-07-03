import skillsData from "utils/skills.json";
import expriencesData from "utils/expriences.json";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const informationsItems = [
  {
    label: "تولد :",
    value: "1381/7/7",
  },
  {
    label: "تحصیلات :",
    value: "دیپلم شبکه و نرم افزار",
  },
  {
    label: "سربازی :",
    value: "معاف",
  },
  {
    label: "آدرس :",
    value: "تهران، تهرانسر",
  },
  {
    label: "ایمیل :",
    value: "soli.ghanbary@gmail.com",
    colored: true,
  },
  {
    label: "موبایل :",
    value: "09199973120",
    colored: true,
  },
];

const Home = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <>
      <div className="flex items-center gap-10 justify-between flex-col-reverse xl:flex-row lg:flex-row">
        <div>
          <h1 className="text-3xl font-semibold text-zinc-600 dark:text-zinc-200">
            {t("personal-info-title")}
          </h1>
          <ul className="my-8 flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate__animated animate__fadeInLeft"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="animate__animated animate__fadeInRight">
                <span className="font-medium">{t("birthdate.label")} </span>
                <span className="dark:text-zinc-400">
                  {t("birthdate.value")}
                </span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate__animated animate__fadeInLeft"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="animate__animated animate__fadeInRight">
                <span className="font-medium">{t("education.label")} </span>
                <span className="dark:text-zinc-400">
                  {t("education.value")}
                </span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate__animated animate__fadeInLeft"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="animate__animated animate__fadeInRight">
                <span className="font-medium">
                  {t("military-service.label")}{" "}
                </span>
                <span className="dark:text-zinc-400">
                  {t("military-service.value")}
                </span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate__animated animate__fadeInLeft"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="animate__animated animate__fadeInRight">
                <span className="font-medium">{t("location.label")} </span>
                <span className="dark:text-zinc-400">
                  {t("location.value")}
                </span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate__animated animate__fadeInLeft"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="animate__animated animate__fadeInRight">
                <span className="font-medium">{t("email.label")} </span>
                <span className="dark:text-zinc-400">{t("email.value")}</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate__animated animate__fadeInLeft"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="animate__animated animate__fadeInRight">
                <span className="font-medium">{t("mobile.label")} </span>
                <span className="dark:text-zinc-400">{t("mobile.value")}</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="p-2 border-2 border-violet-400 animate__animated animate__fadeIn">
          <img src="/profile.jpeg" className="w-64 object-cover" />
        </div>
      </div>
      <hr className="border-zinc-600 my-10" />
      <h1 className="text-3xl font-semibold text-zinc-600 dark:text-zinc-200">
        {t("skills-title")}
      </h1>
      <ul className="my-8 xl:flex lg:flex gap4 flex-wrap xl:flex-row lg:flex-row grid grid-cols-2 gap-10 xl:items-center lg:items-center">
        {skillsData.map((skill, index) => (
          <li
            className="flex items-center gap-2 text-sm text-zinc-400 animate__animated animate__fadeInLeft"
            key={index}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-rose-400 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="gap-2 flex items-center">
              <span className="dark:text-zinc-200 text-zinc-600 font-medium">
                {skill.label}
              </span>
              <span className="text-xs">
                {router.locale === "en" ? skill.en_value : skill.fa_value}
              </span>
            </span>
          </li>
        ))}
      </ul>
      <hr className="border-zinc-600 my-10" />
      <h1 className="text-3xl font-semibold text-zinc-600 dark:text-zinc-200">
        {t("experience-title")}
      </h1>
      <ul className="flex flex-col gap-8 my-8">
        {expriencesData.map((exprience, index) => (
          <li
            className="flex items-center gap-6 xl:text-sm lg:text-sm text-xs dark:text-zinc-400"
            key={index}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <div className="flex xl:gap-10 lg:gap-10 gap-2 xl:items-center lg:items-center flex-col xl:flex-row lg:flex-row">
              <span>{exprience.date}</span>
              <span>
                <a
                  href={exprience.website}
                  rel="nofollow sponsored"
                  className="font-medium text-teal-400 cursor-pointer"
                >
                  {exprience.name}
                </a>{" "}
                <span className="text-zinc-300">/</span> {exprience.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <hr className="border-zinc-600 my-10" />
      <h1 className="text-3xl font-semibold text-zinc-600 dark:text-zinc-200">
        {t("profiles-title")}
      </h1>
      <ul className="flex flex-col gap-8 my-8">
        <li className="flex items-center gap-4 xl:text-base lg:text-base text-sm">
          <img src="/icons/github.svg" className="w-6 h-6" />
          <span className="font-medium dark:text-zinc-200 text-zinc-600">
            {t("socials.github-title")}
          </span>
          <span className="cursor-pointer dark:text-teal-400 text-teal-500 underline">
            https://www.linkedin.com/in/soli-ghanbary/
          </span>
        </li>
        <li className="flex items-center gap-4 xl:text-base lg:text-base text-sm">
          <img src="/icons/linkedin.svg" className="w-6 h-6" />
          <span className="font-medium dark:text-zinc-200 text-zinc-600">
            {t("socials.linkedin-title")}
          </span>
          <span className="cursor-pointer dark:text-teal-400 text-teal-500 underline">
            https://www.linkedin.com/in/soli-ghanbary/
          </span>
        </li>
        <li className="flex items-center gap-4 xl:text-base lg:text-base text-sm">
          <img src="/icons/twitter.svg" className="w-6 h-6" />
          <span className="font-medium dark:text-zinc-200 text-zinc-600">
            {t("socials.twitter-title")}
          </span>
          <a
            href="https://www.linkedin.com/in/soli-ghanbary/"
            rel="nofollow sponsored"
            className="cursor-pointer dark:text-teal-400 text-teal-500 underline"
          >
            https://www.linkedin.com/in/soli-ghanbary/
          </a>
        </li>
        <li className="flex items-center gap-4 xl:text-base lg:text-base text-sm">
          <img src="/icons/instagram.svg" className="w-6 h-6" />
          <span className="font-medium dark:text-zinc-200 text-zinc-600">
            {t("socials.instagram-title")}
          </span>
          <a
            href="https://www.linkedin.com/in/soli-ghanbary/"
            rel="nofollow sponsored"
            className="cursor-pointer dark:text-teal-400 text-teal-500 underline"
          >
            https://www.linkedin.com/in/soli-ghanbary/
          </a>
        </li>
      </ul>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;

import { useTranslations } from "next-intl";

export const useNavLinks = () => {
  const t = useTranslations("header");

  return [
    {
      id: 0,
      name: t("feature"),
      href: "#feature",
    },
    {
      id: 1,
      name: t("rate"),
      href: "#pricing",
    },
    {
      id: 2,
      name: "FAQs",
      href: "#faq",
    },
    {
      id: 3,
      name: "contact",
      href: "#contact",
    },
  ];
};

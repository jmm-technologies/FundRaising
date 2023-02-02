export const SystemNameCheck = (isRTL, nameEnglish, nameArabic) => {
  return isRTL && nameArabic
    ? nameArabic
    : nameEnglish
      ? nameEnglish
      : nameArabic;
};
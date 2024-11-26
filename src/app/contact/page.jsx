import Breadcumb1 from "@/components/breadcumb/Breadcumb1";
import ContactInfo1 from "@/components/section/ContactInfo1";
import GoogleMap1 from "@/components/section/GoogleMap1";
import OurFaq1 from "@/components/section/OurFaq1";

export const metadata = {
  title: "AKS IT SERVICES",
};

export default function Page() {
  return (
    <>
      <Breadcumb1
        title={"Contact us"}
        brief={`We'd love to talk about how we can help you.`}
        isBtnActive={false}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}  // Inline style for title
        briefStyle={{ color: 'black', fontWeight: 'bold' }}  // Inline style for brief
        titleClassName="breadcrumb-title"  // CSS class for title
        briefClassName="breadcrumb-brief"  // CSS class for brief
      />
      <ContactInfo1 />
      <GoogleMap1 />
      {/* <OurFaq1 /> */}
    </>
  );
}

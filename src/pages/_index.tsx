import { Footer } from "@/components/shared/Footer/Footer";

const Index = () => {
  return (
    <>
      <div>dzialaj.org</div>
      <div className="max-w-[1200px] mx-auto px-4">
        <Footer
          links={[
            {
              href: "/",
              label: "Regulamin",
            },
            {
              href: "/",
              label: "Polityka prywatności",
            },
          ]}
          showOrganizationPanel={true}
        />
      </div>
    </>
  );
};

export default Index;

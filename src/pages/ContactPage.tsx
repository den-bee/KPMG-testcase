import ContactCard from "../components/ContactCard";

const ContactPage = () => {
  return (
    <section className=" bg-kpmg-blue text-white flex flex-col justify-center">
      <h2 className="m-10 uppercase text-3xl">Contact details & CTA</h2>
      <div className="w-3/4 flex flex-wrap justify-center gap-6 self-center">
        <ContactCard
          name="Alex Johnson"
          position="Digital Markering Manager"
          email="alex.johson@email.com"
          phoneNumber="(123) 456-7890"
          callToAction="Reach out for marketing solutions"
        />
        <ContactCard
          name="Jamie Lee"
          position="Client Success Specialist"
          email="jamie.lee@email.com"
          phoneNumber="(987) 654-3210"
          callToAction="Contact for customer support queries"
        />
        <ContactCard
          name="Taylor Smith"
          position="Senior Sustainability Lead"
          email="taylor.smith@email.com"
          phoneNumber="(555) 123-4567"
          callToAction="Learn about sustainability services"
        />
        <ContactCard
          name="Morgan Kim"
          position="Event Coordinator"
          email="morgan.kim@email.com"
          phoneNumber="(321) 987-6543"
          callToAction="Inquire about upcoming events"
        />
        <ContactCard
          name="Riley Nguyen"
          position="Head of Public Sector"
          email="riley.nyugen@email.com"
          phoneNumber="(789) 012-3456"
          callToAction="Explore public sector offerings"
        />
        <ContactCard
          name="Jordan Solutions Advisor"
          position="Tech Solutions Advisor"
          email="jordan.parker@email.com"
          phoneNumber="(456) 789-0123"
          callToAction="Schedule a tech consultation"
        />
      </div>
    </section>
  );
};

export default ContactPage;

import { EmbeddedMap } from './embedded_map';

const ContactPage = () => {
  return (
    <>
      <h1 className="h1">Contact Me</h1>
      <div className="page p-4 centered">
        <div className="flex flex-row">
          {/* Contact Sider */}
          <div className="grid grid-cols-4 w-1/2 bg-neutral text-neutral-content rounded-box p-4 m-2">
            <div className="col-span-4 col-start-1">
              <h2 className="h2">Contact</h2>
            </div>
            <div className="col-span-1 col-start-1 space-y-2 text-lg text-righ m-4">
              <p>Name</p>
              <p>Phone</p>
              <p>Email</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
            <div className="col-span-3 col-start-2 space-y-2 text-lg text-left m-4">
              <p>Monty Oshinov</p>
              <p>+1 (289) 501-3036</p>
              <p>momch4il@gamil.com</p>
            </div>
          </div>
          {/* Location Side */}
          <div className="w-1/2 bg-neutral text-neutral-content rounded-box p-4 m-2">
            <h2 className="text-3xl font-semibold divider">Location</h2>
            <EmbeddedMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

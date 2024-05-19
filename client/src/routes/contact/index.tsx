const ContactPage = () => {
  return (
    <>
      <h1 className="h1">Contacts</h1>
      <div className="page p-4 centered">
        <div className="flex flex-row">
          <div className="grid grid-cols-4 w-1/2 bg-neutral text-neutral-content rounded-box p-4 m-2">
            <div className="col-span-4 col-start-1">
              <h2 className="h2">Contact</h2>
            </div>
            <div className="col-span-1 col-start-1 space-y-2 text-lg">
              <p>Name</p>
              <p>Phone</p>
              <p>Email</p>
            </div>
            <div className="col-span-3 col-start-2 space-y-2 text-lg">
              <p>Monty Oshinov</p>
              <p>+1 (289) 501-3036</p>
              <p>momch4il@gamil.com</p>
            </div>
          </div>
          <div className="w-1/2 bg-neutral text-neutral-content rounded-box p-4 m-2">
            <h2 className="text-3xl font-semibold divider">Location</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

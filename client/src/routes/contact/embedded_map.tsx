export const EmbeddedMap = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <iframe
      className="w-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255148.48639205736!2d-79.45319501329449!3d43.343084011084066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d350ea17772a31%3A0xd6546376b88a9a71!2s379%20Niagara%20St%2C%20St.%20Catharines%2C%20ON%20L2M%207S1!5e0!3m2!1sen!2sca!4v1717991226843!5m2!1sen!2sca"
      style={{ border: 0, borderRadius: '10px', height: height / 2 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

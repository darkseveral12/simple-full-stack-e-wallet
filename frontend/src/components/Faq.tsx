const Faq = () => {
  return (
    <section id="faq" className="w-full min-h-[80vh] scroll-mt-20">
      <div className="flex flex-col items-center justify-center gap-4 pb-8 pt-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
          Frequently Asked Questions
        </h1>
        <p className="text-base-content/70 max-w-md">
          Find answers to common questions about our product and services.
        </p>
      </div>

      <div className="px-8 md:px-20 lg:px-30 pb-24">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Is my personal information secure?
          </div>
          <div className="collapse-content text-sm">
            Yes, we use industry-standard security measures to protect your
            personal and financial data.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How can I contact customer support?
          </div>
          <div className="collapse-content text-sm">
            You can reach out to our support team through the "Contact Us" page
            or via email.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Can I use this service on mobile devices?
          </div>
          <div className="collapse-content text-sm">
            Yes, our platform is fully responsive and works on smartphones,
            tablets, and desktops.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Are there any fees for using the service?
          </div>
          <div className="collapse-content text-sm">
            Basic features are free, but some advanced services may include
            minimal fees.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How do I delete my account?
          </div>
          <div className="collapse-content text-sm">
            You can request account deletion in your account settings or contact
            support for assistance.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

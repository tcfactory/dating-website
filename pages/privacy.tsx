import React from "react";
import Footer from "../components/footer";
import Image from "next/image";

function Privacy() {
  return (
    <div className="text-white px-10 py-5">
      <Image src="logo.svg" width={120} height={60} alt="logo" />

      <div className="container mx-auto leading-5 px-10 py-20 lg:px-32">
        <h1 className="font-bold text-xl lg:text-2xl text-center">
          Privacy Information for Website Users
        </h1>
        <div className="text-center">
          <div>by</div>
          <div className="font-bold">Crush in my Backyard</div>
        </div>
        <article className="text-lg mt-10">
          <p>
            The following information serves to clarify the kind, extent and
            purpose of the collection and use of personal data and informs you
            about your rights regarding the collection and processing of your
            personal data. This information is provided in accordance with
            Articles 13 and 14 of the General Data Protection Regulation ("
            <strong>GDPR</strong>").
          </p>
          <p>
            This privacy information is directed at (i) users of the website
            "margelo.io" and (ii) business partners and customers, including
            their employees.
          </p>
          <section>
            <h2>
              Who is responsible for all processing activities and who is your
              contact person in case of any questions?
            </h2>
            <p>Controller of all processing activities is:</p>
            <div className="text-center">
              <div>
                <strong>Margelo GmbH</strong>
              </div>
              <div>FN 566573 x</div>
              <div>Baumgasse 42/16</div>
              <div>1030 Vienna</div>
              <div>
                (referred to as "<strong>Margelo</strong>")
              </div>
            </div>
          </section>
          <section>
            <h2>
              Which data are we processing and where does this data come from?
            </h2>
            <p>
              <em className="underline">If you are a user of the website </em>
            </p>
            <p>
              When using the website Cookies are used. For further information,
              please see section 6.
            </p>
            <p>
              If you contact us via the online contact form under the item
              "Contact us" or via the other contact options offered, the
              personal data you provide will be processed in order to be able to
              deal with and answer your enquiry, in particular your first name,
              surname, e-mail address, telephone number and any data specified
              in the text.
            </p>
            <p>
              <em className="underline">
                If you are a business partner/customer
              </em>
            </p>
            <p>
              On the basis of a (pre-)contractual relationship, the personal
              data provided by you in the course of the initiation of the
              contractual relationship as well as the following data provided
              during the upright contractual relationship will be processed:
            </p>
            <ul className="italic list-disc">
              <li>Name, company or business name;</li>
              <li>Address;</li>
              <li>Contact details (phone, e-mail, fax);</li>
              <li>Company register data;</li>
              <li>Data of the bank account;</li>
              <li>Credit card information;</li>
              <li>UID number;</li>
              <li>Names of contact persons;</li>
              <li>
                Contact details of contact persons (phone, mail, fax, address,
                etc.);
              </li>
              <li>Contract texts and business correspondence;</li>
            </ul>
          </section>
          <section>
            <h2>
              How are we processing your personal data and for which purpose?
            </h2>
            <p>
              We process your personal data for different purposes and by
              various means, depending on whether you are (i) a visitor of our
              website or (ii) a business partner/customer.
            </p>
            <p>
              <em className="underline">If you are a user of the website</em>
            </p>
            <p>We process your personal data</p>
            <ol className="list-decimal ml-6">
              <li>
                for the fulfilment of (pre-)contractual obligations (Article 6
                para 1 lit b GDPR): We process the data collected from you for
                the purpose of contacting you or corresponding with you in
                writing, electronically or by telephone, including in the
                context of (pre-)contractual relationships.Without this data we
                cannot fulfil the contract with you.
              </li>
              <li>
                for the fulfilment of legal obligations (Article 6 para 1 lit c
                GDPR): Your data is also processed for the purpose of fulfilling
                various legal obligations, such as for the purpose of providing
                information to law enforcement agencies and courts in the event
                of an incident.
              </li>
              <li>
                on the basis of legitimate interests (Article 6 para 1 lit f
                GDPR): We process personal data to protect our legitimate
                interests, unless your interests in confidentiality prevail. Our
                legitimate interests is to process and answer your enquiries, to
                initiate legal business contact and to ensure the security of
                the website operation. You can object to the processing of your
                data for advertising purposes at any time (please find more
                information regarding Cookies &amp; Analysis Tools in Section
                6).
              </li>
            </ol>
            <p>
              <em className="underline">
                If you are a business partner/customer
              </em>
            </p>
            <p>We process your personal data</p>
            <ol className="list-decimal ml-6">
              <li>
                for the fulfilment of (pre-)contractual obligations (Article 6
                para 1 lit b GDPR): The purpose of the processing of personal
                data is the performance of our (pre-)contractual duties
                according to our contractual relationship with you, such as our
                duties of protection, due diligence and clarification, the
                provision of services as well as the settlement of claims
                arising from the contract, invoicing etc. Without this data, we
                cannot fulfil the contract with you.
              </li>
              <li>
                for the compliance with legal obligations (Article 6 para 1 lit
                c GDPR): personal data is also processed for the purpose of
                fulfilling various legal obligations, such as the obligation to
                keep proper accounts or for the purpose of providing information
                to law enforcement agencies and courts in the event of an
                incident.
              </li>
              <li>
                on the basis of legitimate interests (Article 6 para 1 letter f
                GDPR): We process personal data to protect our legitimate
                interests, unless your interests in confidentiality prevail.
                These legitimate interests include, for example, the interest in
                optimizing our offer, the interest in sending you advertising
                about our products and services, contacting you regarding the
                initiation or processing of further contractual relationships,
                and the interest in the availability of the data in the event of
                a legal dispute. You can object to the processing of personal
                data for advertising purposes at any time.
              </li>
            </ol>
          </section>
          <section>
            <h2>Transfer of your data</h2>
            <p>
              We will transfer your personal data if we are legally obligated to
              do so to the following authorities and institutions:
            </p>
            <p>
              <em className="underline">If you are a user of the website</em>
            </p>
            <ul className="italic list-disc">
              <li>Service Providers (IT-Provider);</li>
              <li>Courts and authorities in case of necessity;</li>
              <li>
                Legal representatives or lawyers and third parties, assisting in
                legal services;
              </li>
            </ul>
            <p>
              <em className="underline">
                If you are a business partner/customer
              </em>
            </p>
            <ul className="italic list-disc">
              <li>Service providers (IT providers);</li>
              <li>Courts and authorities in case of necessity;</li>
              <li>
                Legal representatives or lawyers and third parties, assisting in
                legal services;
              </li>
              <li>Banks;</li>
              <li>Tax advisers and accountants;</li>
              <li>Auditors;</li>
              <li>Insurance companies in the event of an incident;</li>
            </ul>
            <p>
              We will make sure that your personal data is transferred on the
              basis of Standard Contractual Clauses (as of today: [EU] 2021/914)
              or otherwise in accordance with Articles 46, 47 or 49 GDPR, if the
              above-mentioned recipients of your personal data are seated
              outside EEA and if the EU Commission has not decided that there is
              an adequate level of data protection in place in the country where
              the recipient of your personal data is seated.
            </p>
            <p>
              Furthermore, service providers (processors) will receive your
              personal data from us in order to render their respective services
              (e.g. IT-service providers). All service providers are
              contractually obligated to keep your personal data confidential
              and may use your personal data only on our behalf and in line with
              our instructions.
            </p>
          </section>
          <section>
            <h2>Duration of processing / storage period</h2>
            <p>
              <strong>
                We will process your personal data as long as the processing is
                necessary.
              </strong>{" "}
              Your personal data will be made anonymous or erased automatically
              as soon as the processing is no longer necessary.
            </p>
            <p>
              We retain your personal data necessary for the performance of our
              services according to mandatory record retention and documentation
              duties (e.g. according to the Austrian Commercial Code (
              <em>Unternehmensgesetzbuch</em>) or the Federal Fiscal Code (
              <em>Bundesabgabenordnung</em>)). Furthermore we comply with the
              legal periods of limitation, e.g. according to the Code of Civil
              Law (<em>Allgemeinen Bürgerlichen Gesetzbuch (ABGB)</em>). These
              periods of limitation can last up to 30 years in certain cases.
            </p>
          </section>
          <section>
            <h2>Data processing in connection with the website</h2>
            <p>
              <em className="underline">Cookies &amp; Analysis Tools</em>
            </p>
            <p>
              Our website uses cookies that are absolutely necessary for the
              structure or functioning of the website (technically necessary
              cookies). These cookies cannot be deactivated.
            </p>
            <p>
              Cookies are small text files that are temporarily stored on your
              end device with the help of the browser and / or that your browser
              saves. They do not cause any harm, but make the use of the website
              more user-friendly. The cookies are deleted when you close the
              browser and do not remain stored on your computer. We do not use
              &amp;auot;persistent cookies&amp;auot;.
            </p>
            <p>
              The storage period of the respective cookies depends on the
              duration of the respective platform session.
            </p>
            <p>
              We are using the web analytics service "Fathom Analytics" based on
              our legitimate interests (Article 6 para 1 letter f GDPR) in order
              to continuously optimise our offer, both technically and in terms
              of content. Fathom Analytics is a trademark of Conva Ventures Inc.
              BOX 37058 Millstream PO, Victoria, BC, V9B 0E8, Canada ("
              <strong>Fathom</strong>").
            </p>
            <p>
              You can find more information about the technical implementation
              here:{" "}
              <a
                href="https://usefathom.com/blog/anonymization"
                className="keychainify-checked"
              >
                usefathom.com/blog/anonymization
              </a>
              .
            </p>
            <p>
              Further information on data protection at Fathom can be found at{" "}
              <a
                href="https://usefathom.com/data"
                className="keychainify-checked"
              >
                usefathom.com/data
              </a>
              .
            </p>
          </section>
          <section>
            <h2>What are your rights in connection with your personal data?</h2>
            <p>
              <em className="underline">Right to information</em>
            </p>
            <p>
              Provided that we process your personal data, you have the right to
              information about the purposes of processing, the categories of
              personal data, the recipients of your personal data, the duration
              of storage, your rights, the origin of your personal data and the
              existence of an automated decision-making.
            </p>
            <p>
              <em className="underline">Rectification and erasure of data</em>
            </p>
            <p>
              If we process inaccurate or incomplete personal data you have the
              right to rectification of such data. You may also request the
              erasure of your personal data if your data is processed
              unlawfully, subject to legal obligations preventing the erasure of
              your personal data.
            </p>
            <p>
              <em className="underline">Restriction of processing</em>
            </p>
            <p>
              You may request to restrict the processing of your personal data
              in certain cases.
            </p>
            <p>
              <em className="underline">Data portability</em>
            </p>
            <p>
              You have the right to receive the personal data, which you have
              provided to us, in a structured, commonly used and
              machine-readable format. You have the right to direct transmission
              of those data to another controller as far as this is technically
              feasible.
            </p>
            <p>
              <em className="underline">Right to object</em>
            </p>
            <p>
              You have the right to object, on grounds relating to your
              particular situation, at any time to processing of personal data
              concerning you. If you object to processing of your personal data,
              we shall cease to process your personal data unless our legitimate
              interests to processing your personal data override your
              interests.
            </p>
            <p>
              <em className="underline">Complaint</em>
            </p>
            <p>
              You have the right to lodge a complaint with the supervisory
              authority, if you believe that the processing of your data
              violates data protection law or your rights to protection of your
              personal data have been infringed. In Austria, this is the
              Austrian Data Protection Authority (
              <em>Österreichische Datenschutzbehörde</em>) (
              <a href="https://www.dsb.gv.at/" className="keychainify-checked">
                www.dsb.gv.at
              </a>
              ).
            </p>
            <p>
              <em className="underline">Contact</em>
            </p>
            <p>
              To exercise your rights in connection with your personal data
              processed by us, please contact
            </p>
            <div className="text-center">
              <div>
                <strong>Margelo GmbH</strong>
              </div>
              <div>FN 566573 x</div>
              <div>Baumgasse 42/16</div>
              <div>1030 Vienna</div>
              <div>
                <a
                  href="mailto:hello@margelo.io"
                  className="keychainify-checked"
                >
                  hello@margelo.io
                </a>
              </div>
            </div>
            <p>
              <em className="underline">Definitions</em>
            </p>
            <p>
              Definitions of the terms used (e.g. "personal data" or
              "processing") can be found in Article 4 GDPR.
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;

import React from "react";
import Spacer from "components/Spacer";
import Styled from "styled-components";

const Wrapper = Styled.div`
padding: 0 72px;

.policyList{
    font-family: Platform;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;    
}
.policyDescription{
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: justify;
}


@media (max-width: 768px) {
  height: auto;
  padding: 0 2.4rem;

  .policyDescription{
    font-size: 14px;
    width: 100%;
    line-height: 2.4rem;
    text-align: justify;
    margin: auto;
  }

  .policyList {
    font-size: 18px;
  }
}


`;

const Policy = () => {
  return (
    <Wrapper className="privacyContainer">
      <Spacer y={4.8} />
      <h5 className="policyList">Introduction</h5>
      <Spacer y={1.4} />
      <small className="policyDescription">
        This policy document governs how Bright Futures Children Centre (BFCC)
        operates, collects, uses, maintains, and discloses information collected
        from customers, patrons, and other parties who engage its website,
        landing pages, products and services
      </small>
      <Spacer y={2.2} />
      <small className="policyDescription">
        This Policy applies to the official website and all products and
        services offered by BFCC.
      </small>
      <Spacer y={2.2} />
      <small className="policyDescription">
        Hereafter, BFCC is referred to as ‘The Company’, and all patrons
        hereafter referred to ‘Users’.
      </small>
      <Spacer y={2.2} />
      <h5 className="policyList">1.0 Personal identification information</h5>
      <Spacer y={2.2} />
      <small className="policyDescription">
        The Company may collect personal identification information from Users
        in a variety of ways, including, but not limited to, when Users visit
        our website, register on the website, and in connection with other
        activities, services, features or resources we make available on our
        website. Users may be asked for, as appropriate, a name, email address,
        mailing address or phone number. We will collect personal identification
        information from Users only if they voluntarily submit such information
        to us. Users can always refuse to supply personal identification
        information, except that it may prevent them from engaging in certain
        website-related activities.
      </small>
      <Spacer y={2.2} />
      <small className="policyDescription">
        For optimal consumer protection, all personally identifiable information
        (PII) that The Company collects will be either anonymized (rendered
        anonymous, as the term implies) or pseudonymized (with the consumer’s
        identity replaced with a pseudonym).
      </small>
      <Spacer y={2.2} />
      <h5 className="policyList">
        1.1 Non-personal identification information
      </h5>
      <Spacer y={2.2} />
      <small className="policyDescription">
        The Company may collect non-personal identification information about
        Users whenever they interact with our website. Non-personal
        identification information may include the browser name, the type of
        computer, and technical information about Users’ means of connection to
        our websites, such as the operating system and the Internet Service
        Providers utilized and other similar information.
      </small>
      <Spacer y={2.2} />
      <h5 className="policyList">1.2 Data Breach Response Policy</h5>
      <Spacer y={2.2} />
      <small className="policyDescription">
        While our servers and database are safe and secure, in the event that
        your personal data is exposed or breached (including, but not limited
        to, unauthorized access, use, or disclosure), you will be duly and
        promptly notified with information covering how the breach occurred, the
        severity of the breach and types of data involved.
      </small>
      <Spacer y={2.2} />
      <h5 className="policyList">2.0 Web browser cookies</h5>
      <Spacer y={2.2} />
      <small className="policyDescription">
        Our website may use “cookies” to enhance the User Experience. Users’ web
        browser places cookies on their hard drive for record-keeping purposes
        and sometimes to track information about them. Users may choose to set
        their web browser to refuse cookies or to alert you when cookies are
        being sent. If they do so, note that some parts of the website may not
        function properly.
      </small>
      <Spacer y={2.2} />
      <h5 className="policyList">2.1 How we use collected information</h5>
      <Spacer y={2.2} />
      <small className="policyDescription">
        The Company may collect and use Users personal information for the
        following purposes:
      </small>
      <Spacer y={2.2} />
      <small className="policyDescription">
        To improve customer service: Information you provide helps The Company
        respond to your customer service requests and support needs more
        efficiently.
      </small>
      <Spacer y={2.2} />
      <small className="policyDescription">
        To process payments: The Company may use the information Users provide
        about themselves when placing an order only to provide service to that
        order. The Company does not share this information with outside parties
        except to the extent necessary to provide the service.
      </small>
      <Spacer y={2.2} />
      <small className="policyDescription">
        To send periodic emails: The Company may use the email address to send
        User information and updates about their order. It may also be used to
        respond to their inquiries, questions, and/or other requests. If User
        decides to opt-in to our mailing List, they will receive emails that may
        include company news, updates, related product or service information,
        etc. If at any time the User would like to unsubscribe from receiving
        future emails, The Company includes detailed unsubscribe instructions at
        the bottom of each email.
      </small>
      <Spacer y={2.2} />
      <h5 className="policyList">3.0 How we protect your information</h5>
      <Spacer y={2.2} />
      <small className="policyDescription">
        The Company adopts appropriate data collection, storage, and processing
        practices and security measures to protect against unauthorized access,
        alteration, disclosure, or destruction of your personal information,
        username, password, transaction information, and data stored on The
        Company’s website.
      </small>
      <Spacer y={2.2} />
      <small className="policyDescription">
        Sensitive and private data exchange between the website and its Users
        happens over an SSL secured communication channel and is encrypted and
        protected with digital signatures.
      </small>
      <Spacer y={2.2} />
      <h5 className="policyList">3.1 Sharing your personal information</h5>
      <Spacer y={2.2} />
      <small className="policyDescription">
        The Company does not sell, trade, or rent Users’ personal identification
        information to others. The Company may share generic aggregated
        demographic information not linked to any personal identification
        information regarding visitors and users with our business partners,
        trusted affiliates, and advertisers for the purposes outlined above. We
        may use third-party service providers to help us operate our business
        and the website or administer activities on our behalf, such as sending
        out newsletters or surveys. We may share your information with these
        third parties for those limited purposes provided that you have given us
        your permission.
      </small>
      <Spacer y={2.2} />
      <h5 className="policyList">3.2 Third party websites</h5>
      <Spacer y={2.2} />
      <small className="policyDescription">
        Users may find advertising or other content on our website that link to
        the websites and services of our partners, suppliers, advertisers,
        sponsors, licensors, and other third parties. We do not control the
        content or links that appear on these websites and are not responsible
        for the practices employed by websites linked to or from our website. In
        addition, these sites or services, including their content and links,
        may be constantly changing. These websites and services may have their
        privacy policies and customer service policies. Browsing and interaction
        on any other website, including websites that have a link to our
        website, is subject to that website’s terms and policies.
      </small>
      <Spacer y={2.2} />
      <h5 className="policyList">3.3 Advertising</h5>
      <Spacer y={2.2} />
      <small className="policyDescription">
        Ads appearing on our website may be delivered to Users by advertising
        partners, who may set cookies. These cookies allow the ad server to
        recognize your computer each time they send you an online advertisement
        to compile non-personal identification information about you or others
        who use your computer. This information allows ad networks to, among
        other things, deliver targeted advertisements that they believe will be
        of most interest to you. This privacy policy does not cover the use of
        cookies by any advertisers.
      </small>
      <Spacer y={2.2} />
      <h5 className="policyList">4.0 Changes to this privacy policy</h5>
      <Spacer y={2.2} />
      <small className="policyDescription">
        The Company has the discretion to update this privacy policy at any
        time. When we do, we will revise the updated date at the bottom of this
        page. We encourage Users to frequently check this page for any changes
        to stay informed about how we are helping to protect the personal
        information we collect. You acknowledge and agree that it is your
        responsibility to review this privacy policy periodically and as such,
        become aware of ensuing modifications.
      </small>
      <Spacer y={2.2} />
      <h5 className="policyList">5.0 Your acceptance of these terms</h5>
      <Spacer y={2.2} />
      <small className="policyDescription">
        By using this website, you signify your acceptance of this policy and
        terms of service. If you do not agree to this policy, please do not use
        our website. Your continued use of the website following the posting of
        changes to this policy will be deemed your acceptance of those changes.
      </small>
      <Spacer y={2.2} />
      <h5 className="policyList">6.0 Contacting The Company</h5>
      <Spacer y={2.2} />
      <small className="policyDescription">
        If you have any questions regarding this Privacy Policy, the practices
        of this website, or your dealings with this website, please contact us
        at admin@bfccentre.com
      </small>
      <Spacer y={2.2} />
      <h5 className="policyList">
        This policy document was last updated on 16th June 2021.
      </h5>
      <Spacer y={6.4} />
    </Wrapper>
  );
};
export default Policy;

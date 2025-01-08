import NavBar from "./(Components)/(NavBar)/page";
import Pointer from "./(Components)/Bulletpointers";
import CloudDiv from "./(Components)/Cloudsdiv";
import DivCard from "./(Components)/DivCard";
import Platforms from "./(Components)/PlatformsDiv";
import SmallCards from "./(Components)/SmallCards";
import Cards from "./Cards";


export default function Home() {
  return (
    <>
      <div className="h-full w-full text-black ">
        <NavBar />

        <main className="w-full ">
          <section className="text-center py-12 px-32 hover:animate-pulse my-48">
            <h1 className="text-8xl font-semibold">Innovate. Execute. Grow</h1>
            <h5 className="text-4xl font-medium">
              Helping businesses and partners grow with the help of technology
            </h5>
          </section>

          <section className="py-20 text-center bg-blue-500 text-white  ">
            <div className="text-5xl">
              <h1>
                Totally fabulous experience. Top-quality resources, full
                transparency, very cost-effective and fast response—very well
                done!
              </h1>
            </div>

            <div className="flex items-center justify-center text-center gap-5 mt-10">
              <div className="text-5xl font-extralight">
                <h1 className="font-semibold">Javier</h1>
              </div>
              <div className="text-xl font-bold">
                <h1>CEO & Founder</h1>
              </div>
            </div>
          </section>

          <section className="text-center font-semibold my-20 px-32 ">
            <div className="flex text-7xl gap-3 justify-center">
              <h1>Technology</h1>
              <h1 className="text-[#4169E1]">Experts Across</h1>
              <h1>Technology</h1>
            </div>
            <div className="text-4xl px-6 my-5">
              <h4>
                We carefully assess the optimal solutions to align with your
                unique business requirements. Our expert's meticulous selection
                process ensures that we integrate the most suitable tools into
                your platform, delivering solutions that are both adaptable and
                scalable. Technology that enables your business to grow
                successfully!
              </h4>
            </div>
          </section>

          <section className="px-32 py-5">
            <Platforms
              imgLink1="https://conga.com/sites/default/files/styles/small_hq/public/image/2024-10/logo-conga.png.webp?itok=tFmGDMrb"
              imgLink2="https://img.icons8.com/?size=100&id=38804&format=png&color=000000"
              imgLink3="https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
              imgLink4="https://imgs.search.brave.com/3v8HKjzVXOZyleX0DJtSdN7v4W8vh0IRurk2bnMoKcI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDIvU2VydmljZU5v/dy1Mb2dvLTcwMHgz/OTQuanBn"
            />
            <Platforms
              imgLink1="https://imgs.search.brave.com/1cq4a2J1WzGrz_OgBgmjkVS3OB8RUZhZaDS1sNUM1Tw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ0LzEvZGF0YWJy/aWNrcy1sb2dvLXBu/Z19zZWVrbG9nby00/NDA5NzMucG5nP3Y9/MTk1NzE4NjcxMTIx/NzUzNDUzNg"
              imgLink2="https://select.dev/cdn-cgi/imagedelivery/1zmOcgV1p520E4lLTrYjjg/bcb881af-c434-44bd-5772-d63c0e137a00/width=1920,quality=75"
              imgLink3="https://imgs.search.brave.com/3mac69Clbh5igUt44o_KKqM039oMTFfgM1iNadJWe9E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3RlcnJh/Zm9ybTk0NzUuanBn"
              imgLink4="https://imgs.search.brave.com/BydTAqEcHjf6edamumZ17YUqQcnem4sz13dFbsA1wJw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3RhYmxl/YXUyNjY2LmxvZ293/aWsuY29tLndlYnA"
            />
            <Platforms
              imgLink1="https://imgs.search.brave.com/fUVY7_alQrZAzbG5UO2TAIf9-0Iy0kf_AWRVU-PhboY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL25ldy1z/bGFjay1sb2dvLTIw/MTkuanBn"
              imgLink2="https://boomi.com/wp-content/uploads/BoomiMenuLogoIcon.svg"
              imgLink3="https://imgs.search.brave.com/hhDLecKo6xnxEFjkW9RQCzf5D0VqwaWYZl3s7GHSoO4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2QxL0xvZ28tRG9j/dVNpZ24ucG5n"
              imgLink4="https://imgs.search.brave.com/fokRGMFEL_7DRUQp1bS5IABgbod9_FufGSyXcv-cHkw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0ovaml0dGVy/Yml0LWxvZ28tNkQ2/Q0E5MTZGOS1zZWVr/bG9nby5jb20ucG5n"
            />
          </section>

          <section className="bg-[#F0FFFF] mt-10 text-black ">
            <div className="  text-center ">
              <div className="flex justify-center items-center my-10 gap-3 font-semibold  ">
                <h1 className="text-7xl text-[#4169E1] mt-16"> Conga</h1>
                <h1 className="text-7xl mt-16"> CPQ CLM</h1>
              </div>
              <h1 className="text-4xl  ">Save time; Increase Productivity</h1>
            </div>

            <div className="flex my-14 items-center px-44  ">
              <div className="">
                <div className="text-4xl my-4 font-semibold ">
                  <h1>Congo CPQ</h1>
                </div>
                <div className="text-3xl mb-4 font-thin">
                  <h5>
                    Partner with us and Conga to transform your business growth.
                    Our Conga CPQ solution slashes quote creation and delivery
                    time from weeks to minutes. Built on the Salesforce cloud
                    platform, this powerful tool empowers your pre-sales and
                    sales teams to swiftly convert opportunities into lucrative
                    deals.
                  </h5>
                </div>
                <div className="text-3xl pl-12 font-thin">
                  <ul className="list-disc gap-1">
                    <li> Deliver fast, flawless quotes to your customers.</li>
                    <li>
                      Seamlessly create complex and diverse contracts in
                      minutes.
                    </li>
                    <li>
                      Drive smart decisions with accurate sales forecasts.
                    </li>
                  </ul>
                </div>
                <div className="text-3xl my-4">
                  <h5>
                    Experience the difference with our Conga CPQ solution and
                    watch your business soar.
                  </h5>
                </div>
              </div>

              <div>
                <img
                  src="https://wallpaperaccess.com/full/1271967.jpg"
                  alt=""
                  width={4000}
                  className=" hover:rounded-2xl hover:brightness-75 ml-10 "
                />
              </div>
            </div>

            <div>
              <div className="text-center px-12">
                <h1 className="text-3xl my-9 font-semibold">Conga CLM</h1>
                <h1 className="text-3xl my-9">
                  Handling large volumes of contracts can be a time-consuming
                  and error-prone task for businesses. Simple mistakes can lead
                  to costly repercussions, and failure to meet compliance and
                  legal standards can result in significant liabilities.
                </h1>
                <h1 className="text-3xl my-4 ">
                  Your organization can automate and streamline the entire
                  contract process—from quoting to contracting to revenue
                  management. Ensure that every piece of information is handled
                  accurately and efficiently at every stage.
                </h1>
              </div>

              <div className="text-center my-32 ">
                <div className="flex text-7xl justify-center items-center font-bold gap-3 my-16">
                  <h1 className="text-[#4169E1]">Salesforce </h1>
                  <h1>Clouds </h1>
                </div>
                <h3 className="text-3xl px-80 ">
                  We specialize in Salesforce Cloud implementations, led by
                  specialist certified consultants and developers. With a focus
                  on high user adoption rates, our experts ensure efficient and
                  productive processes through comprehensive training and
                  support. Trust our expertise and customized approach to unlock
                  the full potential of Salesforce Clouds for your business.
                </h3>
              </div>
            </div>

            <div className="flex justify-center items-center my-20 gap-2 ">
              <CloudDiv
                imglink="https://img.icons8.com/?size=100&id=ST8UX0wozRY9&format=png&color=000000"
                text="Sales Cloud"
              />
              <CloudDiv
                imglink="https://img.icons8.com/?size=100&id=dKjAZULRJlO7&format=png&color=000000"
                text="Service Cloud"
              />
              <CloudDiv
                imglink="https://img.icons8.com/?size=100&id=G5prY0Jb1uXX&format=png&color=000000"
                text="Platform"
              />
              <CloudDiv
                imglink="https://img.icons8.com/?size=100&id=gwrZ0uDVPabM&format=png&color=000000"
                text="Marketing Cloud"
              />
              <CloudDiv
                imglink="https://img.icons8.com/?size=100&id=1w4p8XN4ypCN&format=png&color=000000"
                text="Education Cloud"
              />
              <CloudDiv
                imglink="https://img.icons8.com/?size=100&id=pfJBL7mhQ2C4&format=png&color=000000"
                text="Non-profit Cloud"
              />
            </div>

            <div className="flex justify-center items-center gap-2 pb-40 ">
              <CloudDiv
                imglink="https://img.icons8.com/?size=100&id=pt5RU2ksbVFL&format=png&color=000000"
                text="Field Service Cloud"
              />
              <CloudDiv
                imglink="https://img.icons8.com/?size=100&id=DwGn7dCaUcoh&format=png&color=000000"
                text="Pardot"
              />
              <CloudDiv
                imglink="https://img.icons8.com/?size=100&id=E23rkAwSJ4Gz&format=png&color=000000"
                text="Revenue Cloud"
              />
              <CloudDiv
                imglink="https://img.icons8.com/?size=100&id=FKPDvd7kv8Dw&format=png&color=000000"
                text="Experience Cloud"
              />
              <CloudDiv
                imglink="https://img.icons8.com/?size=100&id=9shlfoGKqCS7&format=png&color=000000"
                text="Health Cloud"
              />
              <CloudDiv
                imglink="https://img.icons8.com/?size=100&id=FUZiNN6aw2Rb&format=png&color=000000"
                text="Tableau"
              />
            </div>
          </section>

          <section>
            <div className="flex gap-20 items-center mt-32 justify-center px-40  ">
              <div className="flex justify-center items-center pl-20">
                <img
                  src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600"
                  width={5000}
                  alt=""
                  className="rounded-md"
                />
              </div>

              <div className="flex flex-col pr-20 ">
                <h1 className="text-7xl font-semibold">Accomplish Your</h1>
                <h1 className="text-7xl font-semibold text-[#4169E1]">
                  Software Objectives
                </h1>
                <h3 className="text-3xl mt-5 mb-5">
                  Unlock the full potential of your technology solutions with
                  Cloud Ingenious. With over a decade of experience, our team of
                  certified technology experts has a proven track record of
                  solving complex problems and delivering tailored solutions
                  across various platforms and industries.
                </h3>
                <h3 className="text-3xl mb-5">
                  Our team brings a wealth of expertise and insight gained from
                  years of hands-on experience working with businesses of all
                  sizes. Whether you're a small startup or a large enterprise,
                  we have the knowledge and skills to help you achieve your
                  technology ambitions. Our flexible, nimble, and cost-effective
                  approach is what sets us apart. We pride ourselves on our
                  exceptional customer satisfaction. Our clients love our
                  personalized service and dedication to delivering results that
                  exceed expectations.
                </h3>

                <div className="flex flex-wrap gap-6 ">
                  <a className="relative" href="#">
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                    <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-5 py-5 text-3xl font-bold text-black transition duration-100 hover:bg-[#4169E1] hover:text-gray-900">
                      Servies
                    </span>
                  </a>
                  <a href="#" className="relative">
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
                    <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-5 py-5 text-3xl font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-[#4169E1] ">
                      Technologies
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#F0FFFF] mt-10">
              <div className="flex  justify-center font-bold items-center text-7xl gap-5 pt-14 my-24">
                <h1 className="">What </h1>
                <h1 className="text-[#4169E1]"> We Do</h1>
              </div>

              <div className="flex  justify-evenly px-10 my-10">
                <Cards
                  title="Technical"
                  title1="Consulting"
                  paragraph="We specialize in providing top-tier consulting services across multiple technologies. We offer tailored solutions that meet the unique needs of your business. Our team of expert consultants provides a comprehensive range of services designed to help you leverage the full potential of software and technology to achieve your business goals."
                />
                <Cards
                  title="Resources on"
                  title1="Contract"
                  paragraph="We offer comprehensive outsourcing services in multiple technologies as per your need, providing dedicated teams of developers, admins, and architects to meet fluctuating project demands. With expertise, flexibility, and a collaborative approach, we ensure reliable and scalable solutions tailored to your business needs."
                />
                <Cards
                  title="Custom"
                  title1="Development"
                  paragraph="We offer tailored custom development solutions across multiple technologies to solve your business challenges, driving productivity and efficiency. Through seamless integration, we ensure a single source of truth for your data, empowering exponential growth. Transform your investment into success with our innovative solutions. Our expertise in diverse technologies allows us to create custom solutions that meet your unique needs and help you achieve your business goals."
                />
              </div>
              <div className="flex  justify-evenly px-10 pb-14">
                <Cards
                  title="Managed"
                  title1="Services"
                  paragraph="We offer on-demand managed services for effortless technology management, providing flexible access to expert support tailored to your needs. With our proactive approach and tailored solutions, streamline your operations and achieve your business goals seamlessly. Simplify technology management with us and experience the ease of having dedicated experts at your service."
                />
                <Cards
                  title="App"
                  title1="Design and Development"
                  paragraph="We offer App Design and Development services across multiple platforms, guiding you from concept to security review clearance. With expertise in launching over 15 apps, we provide comprehensive support for app development and go-to-market strategy, ensuring success in various technology ecosystems. Our experienced team ensures your app meets all requirements and achieves a successful launch, helping you maximize your impact and reach across different platforms"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="flex my-20 px-32">
              <div className="flex justify-center items-center pl-20 px-20 ">
                <img
                  src="https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=600"
                  width={3300}
                  alt=""
                  className="rounded-md"
                />
              </div>

              <div className="px-12">
                <div className="flex gap-3 mt-10 ">
                  <h1 className="text-7xl font-semibold">Industries </h1>
                  <h1 className="text-7xl font-semibold text-[#4169E1]">
                    we cater to
                  </h1>
                </div>
                <h3 className="text-3xl my-10 ">
                  We specialize in Salesforce Cloud implementations, led by
                  specialist certified consultants and developers. With a focus
                  on high user adoption rates, our experts ensure efficient and
                  productive processes through comprehensive training and
                  support. Trust our expertise and customized approach to unlock
                  the full potential of Salesforce Clouds for your business.
                </h3>
                <div className="grid grid-cols-2 justify-start">
                  <div className="col-span-1">
                    <Pointer text="Non-Profit" />
                    <Pointer text="Professional Services" />
                    <Pointer text="E-Commerce" />
                    <Pointer text="Real Estate" />
                    <Pointer text="Technology" />
                    <Pointer text="Manufacturing" />
                  </div>
                  <div className="col-span-1">
                    <Pointer text="Insurance" />
                    <Pointer text="Financial Services" />
                    <Pointer text="Healthcare & Life Science" />
                    <Pointer text="Retail & Consumer Goods" />
                    <Pointer text="Education" />
                    <Pointer text="Travel & Hospitality" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-40 mb-24">
            <div className="flex gap-3  justify-center items-center ">
              <h1 className="text-7xl font-semibold">Customer</h1>
              <h1 className="text-7xl font-semibold text-[#4169E1]">
                Success Stories
              </h1>
            </div>

            <div className="  bg-white rounded-2xl shadow-xl overflow-hidden border-4 mx-80 my-20">
              <div className="md:flex p-10">
                <div className="md:shrink-0 flex justify-center items-center ">
                  <img
                    className="h-48 w-full object-cover "
                    src="https://static.wixstatic.com/media/3fd7ef_7b8fa3e89ab7490eaa2e25914beb7b62~mv2.jpg/v1/fill/w_147,h_147,fp_0.31_0.18,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/TESTOMONIAL%20IMAGE.jpg"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-3xl text-black font-extrabold ">
                    Javier
                  </div>
                  <a
                    href="#"
                    className="block mt-1 text-2xl leading-tight  text-black font-semibold hover:underline"
                  >
                    CEO & FOUNDER
                  </a>
                  <p className="mt-2 text-black text-xl">
                    "Having collaborated with numerous offshore companies, I've
                    often faced challenges in communication and aligning
                    schedules with the US timezone. For years, I found myself
                    waking up early to connect with offshore teams. However,
                    since partnering with Cloud Ingenious, communication has
                    been seamless, overcoming cultural differences effortlessly.
                    Their availability during my timezone has been a
                    game-changer, making collaboration smoother than ever.
                    Moreover, their custom project implementation in Salesforce
                    has been nothing short of fantastic. I highly recommend
                    Cloud Ingenious for their exceptional services and
                    commitment to client satisfaction."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#F0FFFF]  py-24">
            <div className="flex items-center justify-center gap-3 ">
              <h1 className="text-7xl font-semibold">Our</h1>
              <h1 className="text-7xl font-semibold text-[#4169E1]">
                Commitments
              </h1>
            </div>
            <div className="text-center font-semibold px-96 ">
              <h3 className="text-3xl my-10">
                At Cloud Ingenious, our mission is centered on people, ensuring
                the delivery of superior Salesforce solutions crafted to exceed
                client needs and propel business success.
              </h3>
            </div>

            <div className="flex justify-evenly mt-10 px-12">
              <SmallCards
                title="Care: You Success First"
                paragraph="Cloud Ingenious prioritizes personalized care, deeply understanding and supporting your business needs for success."
              />
              <SmallCards
                title="Transparent: Open Communication"
                paragraph="Transparency is fundamental, with open communication ensuring you're fully informed and involved at every step."
              />
              <SmallCards
                title="Honesty: Integrity in Every Interaction"
                paragraph="Honesty is our core value, we operate with integrity to provide accurate information and sincere advice, thus, fostering trust."
              />
            </div>
            <div className="flex justify-evenly my-10 px-12">
              <SmallCards
                title="Nimble: Agile andResponsive Solutions"
                paragraph="The company prides itself on agility, swiftly adapting to deliver innovative solutions that meet evolving needs."
              />
              <SmallCards
                title="Innovative: PioneeringSolutions"
                paragraph="Consulting expertise offers tailored guidance in navigating Salesforce complexities, leveraging deep industry knowledge effectively. Our consultants dedicated to understand your unique challenges and craft solutions for them"
              />
              <SmallCards
                title="Honesty: Integrity in Every Interaction"
                paragraph="
                Consulting provides expert guidance and tailored advice to help clients achieve their goals or solve challenges. By leveraging specialized knowledge and insights, consultants deliver actionable strategies and solutions across various fields."
              />
            </div>
          </section>

          <section className="my-20">
            <div className="flex items-center justify-center gap-3 ">
              <h1 className="text-7xl font-semibold">Why choose </h1>
              <h1 className="text-7xl font-semibold text-[#4169E1]">
                Cloud Ingenious
              </h1>
            </div>
            <div className="grid grid-cols-3 my-20 gap-5 pl-32 ">
              <div className="col-span-1 ">
                <DivCard
                  imglink="https://static.wixstatic.com/media/3fd7ef_f3c7b5e9421c4635a6fb932709fcc05d~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3fd7ef_f3c7b5e9421c4635a6fb932709fcc05d~mv2.png"
                  text="10+ Years in the ecosystem"
                />
                <DivCard
                  imglink="https://static.wixstatic.com/media/3fd7ef_08e13ba183fe4e0e94ed02fa01fe9b1b~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/implementations.png"
                  text="100+ implementations done"
                />
                <DivCard
                  imglink="https://static.wixstatic.com/media/3fd7ef_06a1c366b1654e32ab8c830497ef3d62~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/contract.png"
                  text="Resources on Contract"
                />
                <DivCard
                  imglink="https://static.wixstatic.com/media/3fd7ef_1d594aeda5ec4d81ae83d52387f14c87~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/multi-cloud.png"
                  text="Salesforce multi-cloud expertise"
                />
              </div>
              <div className="col-span-1">
                <DivCard
                  imglink="https://static.wixstatic.com/media/3fd7ef_9f70733f19454d5aa993a788d566a15b~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/affordable.png"
                  text="Most affordable"
                />
                <DivCard
                  imglink="https://static.wixstatic.com/media/3fd7ef_bfb9ae82bf704c27b1afbce98b5a78ba~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/systems.png"
                  text="80+ systems integrated"
                />
                <DivCard
                  imglink="https://static.wixstatic.com/media/3fd7ef_e9c80bdc7b544e4ea4e940d6d21d8839~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/flexibles.png"
                  text="Flexible Pricing model"
                />
                <DivCard
                  imglink="https://static.wixstatic.com/media/3fd7ef_cceeac2586dc40bab8e7b3acabd1cdc8~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/support.png"
                  text="24/7 Support"
                />
              </div>
              <div className="col-span-1">
                <DivCard
                  imglink="https://static.wixstatic.com/media/3fd7ef_f3c7b5e9421c4635a6fb932709fcc05d~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3fd7ef_f3c7b5e9421c4635a6fb932709fcc05d~mv2.png"
                  text="Available in your timezone"
                />
                <DivCard
                  imglink="https://static.wixstatic.com/media/3fd7ef_efa86db9375f49ec8414290358f2175c~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/certified.png"
                  text="Certified Salesforce Consultants"
                />
                <DivCard
                  imglink="https://static.wixstatic.com/media/3fd7ef_5d39ed596a7d437abbff60df65af3c42~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/firm.png"
                  text="Salesforce boutique firm"
                />
              </div>
            </div>
          </section>

          <section className="bg-[#F0FFFF] flex px-44 gap-24  ">
            <div className="mt-36">
              <div className="">
                <div className=" text-5xl font-extrabold ">
                  <h1>Find the</h1>
                  <h1 className="text-[#4169E1]">right solution</h1>
                  <h1>for</h1>
                  <h1 className="text-[#4169E1]">your business</h1>
                </div>
              </div>
              <p className="text-3xl my-16">
                Find the right solution for your business Kickstart your next
                Salesforce project with Cloud Ingenious. Complete the form, and
                one of our expert consultants will reach out to you. Regardless
                of your size, industry, or specific needs, we have the expertise
                and experience to help you achieve your goals.
              </p>
            </div>
            <form action="" className="flex flex-col my-24 text-start ">
              <input
                type="text"
                placeholder="First Name"
                className="py-3 text-black text-2xl rounded-xl px-3 border-2   text-start my-9 hover:bg-gray-100"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="py-3 text-2xl rounded-xl border-2 px-3 text-start my-9 hover:bg-gray-100"
                required
              />
              <input
                type="email"
                placeholder="username01@gmail.com"
                className="py-3 text-2xl rounded-xl border-2 px-3  text-start my-9 hover:bg-gray-100"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                cols={50}
                className="text-2xl hover:bg-gray-100 px-3 pt-3"
              ></textarea>
              <button className="px-8 text-xl my-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Submit
              </button>
            </form>
          </section>

          <footer className=" bg-gradient-to-l from-[#0176D3] justify-evenly items-center ">
            <div className="flex justify-evenly py-16">
              <div>
                <img
                  src="https://static.wixstatic.com/media/3fd7ef_bc6e6e28b63e415184f0f64d05057f82~mv2.png/v1/fill/w_165,h_131,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Navbar_logo_2.png"
                  alt=""
                />
                <p className="text-xl w-80 font-semibold">
                  We carefully assess the optimal solutions to align with your
                  unique business requirements. Our expert's meticulous
                  selection process ensures that we integrate the most suitable
                  tools into your platform, delivering solutions that are both
                  adaptable and scalable.
                </p>
              </div>

              <div>
                <div className="text-3xl text-white font-semibold my-5">
                  <h1>Keep In Touch</h1>
                </div>

                <div className="flex items-center text-xl gap-5 text-white">
                  <div>
                    <img
                      src="https://img.icons8.com/?size=100&id=rJSINIXLwINM&format=png&color=000000"
                      alt=""
                      width={80}
                    />
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <div className="font-semibold">Our Location</div>
                    <div>D-9,Sector 3, Noida, Uttar Pradesh, 201301, India</div>
                  </div>
                </div>

                <div className="flex items-center text-xl gap-5 text-white">
                  <div>
                    <img
                      src="https://img.icons8.com/?size=100&id=letUS1DJO1ou&format=png&color=000000"
                      alt=""
                      width={80}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold">Give us a Call</div>
                    <div>+91-9971017141</div>
                  </div>
                </div>
                <div className="flex items-center text-xl gap-5 text-white">
                  <div>
                    <img
                      src="https://img.icons8.com/?size=100&id=xLIkjgcmFOsC&format=png&color=000000"
                      alt=""
                      width={80}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold">Connect via Email</div>
                    <div>care@cloudingenious.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-center items-center py-5">
              <div className="brightness-75 hover:brightness-125">
                <img
                  src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                  alt=""
                  width={70}
                />
              </div>
              <div className="brightness-75 hover:brightness-125">
                <img
                  src="https://img.icons8.com/?size=100&id=63676&format=png&color=000000"
                  alt=""
                  width={70}
                />
              </div>

              <div className="brightness-75 hover:brightness-125">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968852.png"
                  alt=""
                  width={60}
                />
              </div>
              <div className="brightness-75 hover:brightness-125">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt=""
                  width={60}
                />
              </div>

              <div className="brightness-75 hover:brightness-125">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
                  alt=""
                  width={60}
                />
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

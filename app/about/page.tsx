import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About MIH</h1>
            <p className="text-xl text-gray-600 mb-8">
              We are a leading real estate investment company dedicated to creating opportunities that deliver great
              value and returns.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600">We are driven by a clear mission and vision that guide everything we do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Our Mission</h3>
              <p className="text-gray-600">
                To create accessible and valuable real estate investment opportunities that empower individuals to build
                wealth and secure their financial future.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading real estate investment platform in Africa, known for innovation, transparency, and
                delivering exceptional returns to investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600">
              Our core values define who we are and how we operate. They are the foundation of our culture and guide our
              decisions and actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4 text-orange-500">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600">
              Meet the dedicated professionals behind MIH. Our team brings together expertise from real estate,
              finance, technology, and customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-lg text-center">
                <div className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg?height=300&width=300"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-orange-500 mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-gray-300 mb-8">
                We are always looking for talented individuals to join our team. If you are passionate about real
                estate, technology, and making a difference, we would love to hear from you.
              </p>
              <Link
                href="/careers"
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded inline-block"
              >
                View Open Positions
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1746002234/Happy_New_Year_2_eogi7a.png"
                alt="Team culture"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const values = [
  {
    id: 1,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and ethical behavior in all our dealings.",
    icon: "🤝",
  },
  {
    id: 2,
    title: "Innovation",
    description: "We constantly seek new and better ways to serve our clients and improve our offerings.",
    icon: "💡",
  },
  {
    id: 3,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from project selection to customer service.",
    icon: "🏆",
  },
  {
    id: 4,
    title: "Transparency",
    description: "We believe in open and honest communication with our clients and partners.",
    icon: "🔍",
  },
  {
    id: 5,
    title: "Customer Focus",
    description: "Our clients are at the center of everything we do. Their success is our success.",
    icon: "👥",
  },
  {
    id: 6,
    title: "Sustainability",
    description: "We are committed to sustainable practices that benefit our communities and the environment.",
    icon: "🌱",
  },
]

const team = [
  {
    id: 1,
    name: "Alhaji Mohammed Maikudi",
    role: "CEO & Founder",
    bio: "With over 17 years of experience in real estate and finance, Alhaji Mohammed leads our vision and strategy.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746001589/ceo_mams_xmohwd.png",
  },

  {
    id: 3,
    name: "Sr. Haro Zego-Aziz",
    role: "Head, Board of Directors",
    bio: "Sir Haro leads our Board of Directors.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1751375551/WhatsApp_Image_2025-06-25_at_09.05.10_02a2b4e5_bufk0v.jpg",
  },
  {
    id: 2,
    name: "Qs Abdullahi Mams",
    role: "Quantity Surveyor",
    bio: "Qs Abdullahi leads our Quantity Survey Department.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1751374652/qsabdullahi_kt13nf.jpg",
  },
  {
    id: 2,
    name: "Amos Ugochukwu",
    role: "Office PA",
    bio: "Amos represent our CEO in the Office.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1751375998/amos_lvfs3v.jpg",
  },

  {
    id: 2,
    name: "Abdulhakim Ahmad",
    role: "Head of IT Department",
    bio: "Abdulhakim leads our technology initiatives, ensuring we leverage the latest innovations.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746001689/pp1_dg2rv8.jpg",
  },
  {
    id: 4,
    name: "Engr. Shuaibu Ibrahim",
    role: "Building Engineer",
    bio: "Engineer Shuaibu ensures our buildings are built to the highest standards.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1751374711/WhatsApp_Image_2025-06-23_at_12.48.00_fdff4291_r2bh4g.jpg",
  },
  {
    id: 4,
    name: "Sir Rowland Ibrahim",
    role: "General Manager",
    bio: "Senior Management",
    image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1757336780/Sir_Rowland_xj67vd.png",
  },
  {
    id: 4,
    name: "Ibrahim Abubakar",
    role: "Quantity Surveyor",
    bio: "Staff",
    image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1757331059/IMG_20230603_150259_2_g4saws.jpg",
  },
  {
    id: 4,
    name: "Yusuf Abdullahi Muhammad",
    role: "Development Control Contact",
    bio: "Staff",
    image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1757331072/1000023398_drofn4.jpg",
  },
  {
    id: 4,
    name: "Fatima Saraki",
    role: "Admin & Human Resource Manager",
    bio: "Administration & Human Resources",
    image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1757337605/Faty_Admin_ly8pko.png",
  },
  {
    id: 4,
    name: "Alamin, Mohammed Wondik",
    role: "Head of Operations",
    bio: "Operations",
    image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1757331065/IMG_20241004_102858_693_xacanf.jpg",
  },
]

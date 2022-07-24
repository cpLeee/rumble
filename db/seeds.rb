# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.reset_pk_sequence
Mentor.destroy_all
Mentor.reset_pk_sequence
Connection.destroy_all
Connection.reset_pk_sequence
Skill.destroy_all
Skill.reset_pk_sequence
SkillsJoin.destroy_all
SkillsJoin.reset_pk_sequence
Conversation.destroy_all
Conversation.reset_pk_sequence
Message.destroy_all
Message.reset_pk_sequence

puts "Start Seeding!...🌱"

leah = User.create(
    name: "Leah Chen", 
    background: "FullSnack Developer transitioning from healhcare.",
    profession: "Software Engineer",
    city: "San Francisco",
    profile_url: "https://ca.slack-edge.com/T02MD9XTF-U037XJAQM8S-e162a56bc9e1-512", 
    username: "Leah Chen",
    password: "12345678", 
    password_confirmation:"12345678", 
    admin: true) 

10.times do
    User.create(
        name: Faker::Name.name,
        background: Faker::Movies::HarryPotter.quote,
        profession: Faker::Movies::HarryPotter.house,
        city: Faker::Nation.capital_city,
        profile_url: Faker::Placeholdit.image, 
        username: Faker::Name.name,
        password: "12345678",
        password_confirmation: "12345678")
end

Mentor.create(name: "Ashley Chen", background: "UX/UI Designer with a background in psychology, specializing in human connection.", profession: "UX/UI Designer", city: "Los Angeles", profile_url: "https://media-exp1.licdn.com/dms/image/C5603AQF1fXFh6YKsVQ/profile-displayphoto-shrink_200_200/0/1557986640746?e=1663804800&v=beta&t=62Qd0J4XFg3AUvcLvD14owFDCJLwiZ7V7JbdcC6eZgI")

Mentor.create(name: "Annemarie Lucernoni", background: "Software Engineer with a background in executive recruiting. Cyling professional and beer enthusiast!", profession: "Software Engineer", city: "Seattle", profile_url: "https://ca.slack-edge.com/T02MD9XTF-U0397UDEEC8-0536e9a15278-512")

Mentor.create(name: "Andy Situ", background: "Data wizard with a background in finance and marketing.", profession: "Data Scientist", city: "San Francisco", profile_url: "https://cdn-images-1.medium.com/max/800/1*NNZ0md96X4sMSvV4WgqHpQ.png")

Mentor.create(name: "Cristina Diaz", background: "Software Engineer with a background in Chemistry! Professional green thumb and momma to Paco.", profession: "Software Engineer", city: "Los Angeles", profile_url: "https://ca.slack-edge.com/T02MD9XTF-U0394GNGC5U-811a6ed48f91-512")

Mentor.create(name: "Anna Nguyen", background: "UX/UI Designer with a background in hospitality and management. Loves traveling!", profession: "UX/UI Designer", city: "San Francisco", profile_url: "https://media-exp1.licdn.com/dms/image/C5603AQFTNS8EOVEI6w/profile-displayphoto-shrink_200_200/0/1630444057634?e=2147483647&v=beta&t=F96ogZd33W5-2IgEDir2ElC12UyLC184DGmLPzf7dec")

Mentor.create(name: "Alan Martinez", background: "Software Engineer with a background in Economics and loves going to concerts!", profession: "Software Engineer", city: "Riverside", profile_url: "https://ca.slack-edge.com/T02MD9XTF-U037WJF4JNT-6e0ec1934273-512")

Mentor.create(name: "Danko Karleusa", background: "Software Engineer with a background in game development! ", profession: "Game Developer", city: "Los Angeles", profile_url: "https://ca.slack-edge.com/T02MD9XTF-U02U0G01L1K-5dfb36ab9a79-512")

Mentor.create(name: "Cynthia Navarro", background: "Data queen with a background in finance.", profession: "Data Scientist", city: "San Francisco", profile_url: "https://media-exp1.licdn.com/dms/image/C5603AQHjTesGqgiDfg/profile-displayphoto-shrink_200_200/0/1610035282241?e=1664409600&v=beta&t=Z6u1ghSeGETC4njolXUmhiNR566-x3H-glYWCNlc9Ag")

Mentor.create(name: "Christian Stringham", background: "Software Engineer, Yeezus enthusiast and MUI master.", profession: "Software Engineer", city: "Salt Lake City", profile_url: "https://ca.slack-edge.com/T02MD9XTF-U038GMSJND7-9e728f6366ae-512")

Mentor.create(name: "Vicky Bunarjo", background: "Board certified nurse practioner turned into User Experience connoisseur.", profession: "UX Researcher", city: "San Mateo", profile_url: "https://media-exp1.licdn.com/dms/image/C5603AQGPVmldntulFQ/profile-displayphoto-shrink_200_200/0/1647748195103?e=1664409600&v=beta&t=X7zZGM1FWSOm9ztsUzs7WMVBETu3PdfyKahX2c9hzBY")

Mentor.create(name: "Eli Craig", background: "Software Engineer, professional mentor and music enthusiast!", profession: "Software Engineer", city: "Marysville", profile_url: "https://ca.slack-edge.com/T02MD9XTF-U03B248QLA2-70e6411cf056-512")

Mentor.create(name: "Eric Situ", background: "Product Manager with a background in marketing and strategy. ", profession: "Product Manager", city: "San Francisco", profile_url: "https://media-exp1.licdn.com/dms/image/C5103AQEdW-sF9bR_JQ/profile-displayphoto-shrink_200_200/0/1516667963859?e=1663804800&v=beta&t=dHXEDs66CHoOfygkg48QaZ743hxitOWnHsB2OY00_q0")

Mentor.create(name: "Issac Lewkow", background: "Software Engineer and professional problem solver who loves gaming, movies and code!", profession: "Cyber Security Engineer", city: "Loveland", profile_url: "https://ca.slack-edge.com/T02MD9XTF-U0361GE88CB-1c30845e1c5e-512")

Mentor.create(name: "Daniel Chan", background: "Software Engineer with a background in environmental consulting. Love to travel!", profession: "Web3 Developer", city: "San Francisco", profile_url: "https://ca.slack-edge.com/T02MD9XTF-U037H4AMR19-b6de91d23eff-512")

Mentor.create(name: "Levana Lee", background: "Product Manager with a background in operations and marketing.", profession: "Product Manager", city: "Los Angeles", profile_url: "https://media-exp1.licdn.com/dms/image/C5603AQF_m3-20sA7iw/profile-displayphoto-shrink_200_200/0/1549431031740?e=1664409600&v=beta&t=lHsGxT0wqN_PGlhmeunONggl47aTp36NMfzVIr83_gc")

Mentor.create(name: "Jenna Hrdlicka", background: "Software Engineer and professional sommelier with a background in journalism. Transitioned from writing articles to writing code!", profession: "Software Engineer", city: "Seattle", profile_url: "https://ca.slack-edge.com/T02MD9XTF-U037MMZVCD6-527b2bd79a4b-512")

Mentor.create(name: "Paige Mcgee", background: "Nurse Manager turned Product Designer helping patients and healthcare centers through empathy and action-oriented rapid prototyping of solutions.", profession: "Product Designer", city: "Chicago", profile_url: "https://media-exp1.licdn.com/dms/image/C5603AQF_TGMUQ26bfA/profile-displayphoto-shrink_200_200/0/1617148102351?e=1664409600&v=beta&t=_m3HlDpgZqO7dm1qWrbc8Y-4ndTtzaTc6I-446DJc7w")

Mentor.create(name: "Kevin Nielsen", background: "Software Engineer, professional athlete and life coach.", profession: "Software Engineer", city: "Fillmore", profile_url: "https://ca.slack-edge.com/T02MD9XTF-U03AFKL6GE9-f29e5ed41800-512")

Mentor.create(name: "Mai Vang", background: "Software Engineer with a background in finance. Moved to CA from the Midwest!", profession: "Software Engineer", city: "Los Angeles", profile_url: "https://ca.slack-edge.com/T02MD9XTF-U038F99SE77-1a6a72106fc9-512")

Mentor.create(name: "Matthew Mcgee", background: "Product Manager with a background in fin-tech specializing in improving existing processes to create greater economic opportunity for consumers.", profession: "Product Manager", city: "Chicago", profile_url: "https://media-exp1.licdn.com/dms/image/C5603AQHMaaqod-OzyA/profile-displayphoto-shrink_200_200/0/1613517806612?e=1664409600&v=beta&t=RQTwRNiuGN2jIsHe63GMU1fNbSJ3M0M_yUvGxSJYcdc")


10.times do
    Connection.create(
        user_id: User.ids.sample,
        mentor_id: Mentor.ids.sample)
end

10.times do 
    Skill.create(skill: Faker::ProgrammingLanguage.name)
end

10.times do 
    SkillsJoin.create(
        user_id: User.ids.sample,
        mentor_id: Mentor.ids.sample,
        skill_id: Skill.ids.sample)
end

10.times do
    Conversation.create(
        created_at: Faker::Time.backward(days: 5, period: :morning, format: :short),
        updated_at: Faker::Time.backward(days: 5, period: :morning, format: :short))
end

10.times do
    Message.create(
        read: Faker::Boolean.boolean, 
        created_at: Faker::Time.backward(days: 5, period: :morning, format: :short),
        updated_at: Faker::Time.backward(days: 5, period: :morning, format: :short),
        conversation_id: Conversation.ids.sample, 
        sender_id: User.ids.sample,
        receiver_id: User.ids.sample
    )
end

puts "Done seeding!...✅ "
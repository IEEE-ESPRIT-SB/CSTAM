import Header from './_components/Header';
import Section from './_components/Section/Section';
/* import './style.css';
 */
export default function AboutUs() {
    return (
        <main className='flex flex-col md:gap-0 gap-10 pb-10'>
            <Header title='About Us' />
            <Section
                title='CSTAM 1.0'
                subtitle='What is the event?'
                image='/images/ieee/cstam.png'>
                This significant event brings together members of the IEEE
                Computer Society across Tunisia, including students and young
                professionals, with more than 300 participants, and will be
                taking place on November 16th and 17th 2024. CSTAM offers an
                exceptional opportunity to get involved in a variety of
                technical challenges aimed at pushing the boundaries of
                innovation and problem-solving. Planned over two enriching days,
                the event offers a dynamic combination of technical and
                non-technical challenges, as well as workshops and international
                experts, all focused on the theme of artificial intelligence in
                gaming. This event provides an excellent opportunity for
                networking, learning, and competition, giving participants the
                chance to connect with peers, gain valuable insights, and
                showcase their skills.
            </Section>
            <Section
                title='IEEE'
                subtitle='What is IEEE?'
                image='/images/ieee/IEEE.webp'
                stats={[
                    { value: '300', label: 'Conferences' },
                    { value: '2806', label: 'Student Branches' },
                    { value: '432K', label: 'Members' },
                    { value: '160', label: 'Countries' }
                ]}
                isInverted>
                The Institute of Electrical and Electronics Engineers (IEEE) is
                a global professional organization dedicated to advancing
                technology for the benefit of humanity. It serves as a leading
                authority on a wide range of areas including electrical
                engineering, computer science, and electronics. IEEE provides a
                platform for professionals, researchers, and students to
                collaborate, innovate, and exchange ideas through conferences,
                publications, standards development, and educational
                initiatives.
            </Section>
            <Section
                title='IEEE ESPRIT Student Branch'
                subtitle='Who are we?'
                image='/images/ieee/SB_W.webp'
                stats={[
                    { value: '900', label: 'Members' },
                    { value: '19', label: 'Awards' },
                    { value: '10', label: 'Units' },
                    { value: '270', label: 'Activities' }
                ]}>
                IEEE Esprit Student Branch is the largest SB in Tunisia Section
                as well as Region 8. Founded in 2017, IEEE ESPRIT Student Branch
                made its way to being ranked as the largest Student Branch in
                Tunisia Section as well as the Region 8. It includes 7 technical
                chapters (AESS, CIS, CS, IAS, IES, PES, MTTS, RAS) alongside two
                groups (SIGHT and WIE).
            </Section>
            <Section
                title='IEEE ESPRIT CS Student Branch Chapter'
                subtitle='Who are we?'
                image='/images/ieee/cs.png'
                stats={[
                    { value: '2018', label: 'Foundation' },
                    { value: '250', label: 'Members' },
                    { value: '+22', label: 'Activities' }
                ]}
                isInverted>
                The IEEE CS ESPRIT SBC is dedicated to advancing the theory,
                practice, and application of computer and information processing
                science and technology. Through continuous workshops and
                efforts, we, as CS ESPRIT SBC, strive to empower our members
                with knowledge of trending technologies. We are committed to
                integrating members into a dynamic community that fosters
                learning, collaboration, and engagement with IEEE activities,
                ensuring a dynamic and forward-thinking environment for aspiring
                professionals.
            </Section>
        </main>
    );
}

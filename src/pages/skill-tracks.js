import Head from 'next/head';
import Link from 'next/link';

export default function SkillTracks() {
  const tracks = [
    {
      title: 'Cloud Security',
      summary: [
        'Secure AWS S3 buckets',
        'Manage IAM roles',
        'Detect & fix cloud misconfigurations'
      ],
      href: '/tracks/cloud-security'
    },
    {
      title: 'Security Scripting',
      summary: [
        'Python & Bash scripting',
        'Automate security tasks',
        'Parse logs & detect anomalies'
      ],
      href: '/tracks/security-scripting'
    },
    {
      title: 'Compliance & Risk',
      summary: [
        'Work with frameworks (NIST, CIS, SOC 2)',
        'Perform risk assessments',
        'Understand audits & documentation'
      ],
      href: '/tracks/compliance-risk'
    }
  ];
  return (
    <>
      <Head>
        <title>Skill Tracks - Elysium Cyber</title>
      </Head>
      <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">
        <section className="py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-cyan-400">Elysium Cyber</h1>
          <p className="mt-4 text-xl font-medium">
            Real cybersecurity experience. Structured. Listable. Trusted.
          </p>
          <p className="mt-6 text-lg">
            Choose your skill track below to start building real-world cybersecurity experience.
          </p>
        </section>
        <section className="px-4 pb-20">
          <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
            {tracks.map((track) => (
              <Link key={track.title} href={track.href} className="group">
                <div className="bg-gray-800 rounded-lg p-6 h-full shadow transition transform group-hover:-translate-y-1 group-hover:shadow-xl group-hover:scale-105">
                  <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                    {track.title}
                  </h2>
                  <ul className="space-y-1 text-left text-gray-300">
                    {track.summary.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <footer className="text-center py-4 text-sm text-gray-400 border-t border-gray-700">
          © 2025 Elysium Cyber. All rights reserved.
        </footer>
      </main>
    </>
  );
}

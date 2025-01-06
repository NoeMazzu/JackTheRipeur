export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-gray-50 px-8 py-10 sm:px-20 sm:py-20 font-sans">
      {/* Header Section */}
      <header className="text-center bg-gradient-to-r from-blue-500 to-green-400 text-white py-12 rounded-lg shadow-md w-full">
        <h1 className="text-5xl font-extrabold">
          Bienvenue sur l'application citoyenne
        </h1>
        <p className="mt-6 text-2xl">
          Simplifiez votre quotidien avec une meilleure gestion des déchets.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col mt-8 gap-24 row-start-2 items-center w-full">
        {/* Features Section */}
        <section id="features" className="w-full max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">
            Fonctionnalités principales
          </h2>
          <div className="grid sm:grid-cols-3 gap-12">
            {[
              {
                title: "Signaler un problème",
                description:
                  "Signalez facilement une poubelle pleine ou un déversement illégal.",
              },
              {
                title: "Suivi en temps réel",
                description:
                  "Suivez les camions de collecte en direct et leur progression.",
              },
              {
                title: "Notifications",
                description:
                  "Recevez des alertes pour les jours de collecte et autres informations importantes.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-blue-500 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">
            Pourquoi utiliser l'application ?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-left mx-auto max-w-4xl text-lg leading-relaxed">
            {[
              "Simplification de la gestion des déchets pour tous les citoyens.",
              "Amélioration de l’environnement local grâce à un service optimisé.",
              "Participation à une communauté engagée dans la propreté.",
            ].map((benefit, index) => (
              <li key={index} className="mb-6">
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Tutorial Section */}
        <section id="tutorials" className="w-full max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">
            Comment utiliser l'application
          </h2>
          <p className="text-gray-700 text-xl mb-12">
            Découvrez à quel point il est facile de signaler un problème ou de
            suivre les collectes en temps réel.
          </p>
          <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/tutoriel-video"
              title="Tutoriel vidéo"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">FAQ</h2>
          <div className="text-left mx-auto max-w-4xl space-y-8">
            {[
              {
                question: "Comment signaler un problème ?",
                answer:
                  "Utilisez l’option « Signaler » dans l’application pour sélectionner le type de problème et envoyer une alerte.",
              },
              {
                question: "L’application est-elle gratuite ?",
                answer:
                  "Oui, elle est entièrement gratuite pour tous les citoyens.",
              },
              {
                question: "Qui puis-je contacter en cas de problème ?",
                answer:
                  "Une assistance est disponible via le formulaire de contact dans l’application.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <summary className="font-semibold text-gray-800 cursor-pointer text-xl">
                  {faq.question}
                </summary>
                <p className="text-gray-700 mt-4 pl-4 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="row-start-3 mt-8 flex flex-col items-center gap-6 py-10 w-full bg-blue-500 text-white rounded-t-lg shadow-lg">
        <p className="text-center text-lg">
          &copy; 2025 Application Citoyenne. Tous droits réservés.
        </p>
        <div className="flex gap-8">
          {[
            { name: "Twitter", href: "https://twitter.com" },
            { name: "Facebook", href: "https://facebook.com" },
            { name: "LinkedIn", href: "https://linkedin.com" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-xl"
            >
              {link.name}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

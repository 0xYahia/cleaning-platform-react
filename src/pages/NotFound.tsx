import { Link } from 'react-router-dom'

interface NotFoundProps {
  lang: 'en' | 'ar'
}

export function NotFound({ lang }: NotFoundProps) {
  const isAr = lang === 'ar'
  return (
    <section className="max-w-3xl mx-auto px-6 py-xl text-center">
      <p className="text-display-lg font-display-lg text-primary">404</p>
      <h1 className="text-display-md font-display-md text-primary mb-4">
        {isAr ? 'الصفحة غير موجودة' : 'Page not found'}
      </h1>
      <p className="text-body-lg text-on-surface-variant mb-lg">
        {isAr
          ? 'الصفحة التي تبحث عنها غير متاحة. يمكنك العودة للرئيسية.'
          : "The page you are looking for doesn't exist. Let's get you back home."}
      </p>
      <Link
        to={isAr ? '/ar' : '/'}
        className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold"
      >
        {isAr ? 'العودة للرئيسية' : 'Back to home'}
      </Link>
    </section>
  )
}

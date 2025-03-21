import Heading from '../../components/atoms/Heading';
import { createTranslation } from '../i18n';
const Home = async ({ params: { lng } }) => {
  const { t } = await createTranslation(lng);

  return (
    <div className="mx-auto max-w-5xl">
      <main>
        <p>{t('test')}</p>
        <Heading type="h1">Hello 👋, I&apos;m Jose L.</Heading>
        <p className="mb-2">
          I&apos;m a web developer with a passion for creating modern,
          responsive, and intuitive web applications.
        </p>
        <p>
          I specialize in React, Next.js, and JavaScript, and I enjoy bringing
          ideas to life through clean, efficient code.
        </p>
        <input className="accent-primary" type="checkbox" />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;

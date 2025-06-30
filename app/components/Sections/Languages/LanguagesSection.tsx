import Section from '../Section'
import LanguageBar from './LanguageBar'
import data from "@/app/portfolio";

const LanguagesSection = () => {
  return (
    <>
    <Section
      id="languages"
      title="Languages"
      content={
        <div className='flex flex-col gap-10 flex-wrap justify-center items-center
        lg:flex-row'>
          {data.languages.map(lang => (
            <LanguageBar language={lang.title} level={lang.level} />
          ))}
        </div>
      }
    />
  </>
  )
}

export default LanguagesSection

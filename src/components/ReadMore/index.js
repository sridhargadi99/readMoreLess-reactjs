// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  SubContainer,
  MainHeading,
  MainDescription,
  ContentContainer,
  ReactImage,
  ReactDescription,
  ReactButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [buttonStage, setButtonStage] = useState(false)
  const onClickReactButton = () => setButtonStage(prevState => !prevState)
  const content = buttonStage
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  return (
    <MainContainer>
      <SubContainer>
        <MainHeading>React Hooks</MainHeading>
        <MainDescription>Hooks are a new addition to React</MainDescription>
        <ContentContainer>
          <ReactImage
            src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="react hooks"
          />
          <ReactDescription>{content}</ReactDescription>
          <ReactButton type="button" onClick={onClickReactButton}>
            Read {buttonStage ? 'Less' : 'More'}
          </ReactButton>
        </ContentContainer>
      </SubContainer>
    </MainContainer>
  )
}

export default ReadMore

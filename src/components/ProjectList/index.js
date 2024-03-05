import {
  ProjectCardListItem,
  ProjectCardImage,
  ProjectCardName,
} from './styledComponents'

const ProjectList = props => {
  const {projectCardDetails} = props
  const {name, imageUrl} = projectCardDetails

  return (
    <ProjectCardListItem>
      <ProjectCardImage src={imageUrl} alt={name} />
      <ProjectCardName>{name}</ProjectCardName>
    </ProjectCardListItem>
  )
}

export default ProjectList

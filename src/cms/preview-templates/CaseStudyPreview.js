import React from 'react'
import { CaseStudyTemplate } from '../../templates/case-studies'

const CaseStudyPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <CaseStudyTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

export default CaseStudyPreview
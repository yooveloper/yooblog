import { memo } from 'react'

function Utterances() {
  return (
    <section
      ref={(elem) => {
        if (!elem) return
        const scriptElem = document.createElement('script')
        scriptElem.src = 'https://utteranc.es/client.js'
        scriptElem.async = true
        scriptElem.setAttribute('repo', 'yooveloper/yooblog')
        scriptElem.setAttribute('issue-term', 'pathname')
        scriptElem.setAttribute('theme', 'github-dark')
        scriptElem.setAttribute('crossorigin', 'anonymous')
        elem.appendChild(scriptElem)
      }}
    />
  )
}

export default memo(Utterances)

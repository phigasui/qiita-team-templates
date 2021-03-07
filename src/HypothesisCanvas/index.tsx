import React from 'react'
import ReactDOM from 'react-dom'
import {
  HypothesisCanvas,
  HypothesisCanvasInitialData,
  HypothesisCanvasItems,
  HypothesisCanvasData
} from './Hypothesiscanvas'

interface RenderProps {
  elementId: string
}

type RenderFunction = ({ elementId }: RenderProps) => void

class TemplateManeger {
  public templates: { [key: string]: RenderFunction }

  constructor() {
    this.templates = {}
  }

  public register({ name, renderFunction }: { name: string, renderFunction: RenderFunction }): void {
    this.templates[name] = renderFunction
  }

  public render({ name, elementId }: { name: string, elementId: string }): void {
    this.templates[name]({ elementId })
  }
}

const tempaltesManager = new TemplateManeger
tempaltesManager.register({
  name: 'Hypothesiscanvas',
  renderFunction: ({ elementId }: RenderProps) => {
    const element = document.getElementById(elementId)

    let data: HypothesisCanvasData = HypothesisCanvasInitialData

    element.querySelectorAll('h2').forEach((node: HTMLElement) => {
      if (HypothesisCanvasItems[node.textContent.trim()]) {
        data[HypothesisCanvasItems[node.textContent.trim()]] = getSiblingNodes(node)
      }
    })

    ReactDOM.render(
      <HypothesisCanvas {...data} />,
      document.getElementById(elementId)
    )
  }
})

const getSiblingNodes = (node: HTMLElement) => {
  let element: Element = node.nextElementSibling

  let nodes: HTMLElement = document.createElement('div')

  while (element && !/H1|H2|SCRIPT/.test(element.tagName)) {
    nodes.append(element)

    element = element.nextElementSibling
  }

  return nodes
}

interface Global {
  templateManager: TemplateManeger
}

declare var globalThis: Global
globalThis.templateManager = tempaltesManager

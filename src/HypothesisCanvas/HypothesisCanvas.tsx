import React from 'react'

type HypothesisCanvasKeys = 'objective'
                          | 'vision'
                          | 'solution'
                          | 'unfairAdvantage'
                          | 'valueProposition'
                          | 'significance'
                          | 'overtProblem'
                          | 'potentialProblem'
                          | 'existingAlternatives'
                          | 'situation'
                          | 'tendency'
                          | 'keyMetrics'
                          | 'channels'
                          | 'revenueStreams'

export const HypothesisCanvasItems: { [key: string]: HypothesisCanvasKeys } = {
  '目的': 'objective',
  'ビジョン': 'vision',
  'ソリューション': 'solution',
  '優位性': 'unfairAdvantage',
  '提案価値': 'valueProposition',
  '意味': 'significance',
  '顕在課題': 'overtProblem',
  '潜在課題': 'potentialProblem',
  '代替手段': 'existingAlternatives',
  '状況': 'situation',
  '傾向': 'tendency',
  '評価指標': 'keyMetrics',
  'チャネル': 'channels',
  '収益モデル': 'revenueStreams',
}

export type HypothesisCanvasData = { [key in HypothesisCanvasKeys]: HTMLElement }

export const HypothesisCanvasInitialData: HypothesisCanvasData = {
  objective: document.createElement('div'),
  vision: document.createElement('div'),
  solution: document.createElement('div'),
  unfairAdvantage: document.createElement('div'),
  valueProposition: document.createElement('div'),
  significance: document.createElement('div'),
  overtProblem: document.createElement('div'),
  potentialProblem: document.createElement('div'),
  existingAlternatives: document.createElement('div'),
  situation: document.createElement('div'),
  tendency: document.createElement('div'),
  keyMetrics: document.createElement('div'),
  channels: document.createElement('div'),
  revenueStreams: document.createElement('div'),
}

export interface HypothesisCanvasProps {
  objective: HTMLElement
  vision: HTMLElement
  solution: HTMLElement
  unfairAdvantage: HTMLElement
  valueProposition: HTMLElement
  significance: HTMLElement
  overtProblem: HTMLElement
  potentialProblem: HTMLElement
  existingAlternatives: HTMLElement
  situation: HTMLElement
  tendency: HTMLElement
  keyMetrics: HTMLElement
  channels: HTMLElement
  revenueStreams: HTMLElement
}

export const HypothesisCanvas = ({
  objective,
  vision,
  solution,
  unfairAdvantage,
  valueProposition,
  significance,
  overtProblem,
  potentialProblem,
  existingAlternatives,
  situation,
  tendency,
  keyMetrics,
  channels,
  revenueStreams,
}: HypothesisCanvasProps
) => {
  return (
    <table>
      <tr>
        <td colSpan={3}>
          <h2>目的</h2>
          <div dangerouslySetInnerHTML={{ __html: objective.innerHTML }}></div>
        </td>
        <td colSpan={3}>
          <h2>ビジョン</h2>
          <div dangerouslySetInnerHTML={{ __html: vision.innerHTML }}></div>
        </td>
      </tr>
      <tr>
        <td rowSpan={2}>
          <h2>ソリューション</h2>
          <div dangerouslySetInnerHTML={{ __html: solution.innerHTML }}></div>
        </td>
        <td>
          <h2>優位性</h2>
          <div dangerouslySetInnerHTML={{ __html: unfairAdvantage.innerHTML }}></div>
        </td>
        <td rowSpan={2}>
          <h2>提案価値</h2>
          <div dangerouslySetInnerHTML={{ __html: valueProposition.innerHTML }}></div>
          <h2>意味</h2>
          <div dangerouslySetInnerHTML={{ __html: significance.innerHTML }}></div>
        </td>
        <td rowSpan={2}>
          <h2>顕在課題</h2>
          <div dangerouslySetInnerHTML={{ __html: overtProblem.innerHTML }}></div>
          <h2>潜在課題</h2>
          <div dangerouslySetInnerHTML={{ __html: potentialProblem.innerHTML }}></div>
        </td>
        <td>
          <h2>代替手段</h2>
          <div dangerouslySetInnerHTML={{ __html: existingAlternatives.innerHTML }}></div>
        </td>
        <td rowSpan={2}>
          <h2>状況</h2>
          <div dangerouslySetInnerHTML={{ __html: situation.innerHTML }}></div>
          <h2>傾向</h2>
          <div dangerouslySetInnerHTML={{ __html: tendency.innerHTML }}></div>
        </td>
      </tr>
      <tr>
        <td>
          <h2>評価指標</h2>
          <div dangerouslySetInnerHTML={{ __html: keyMetrics.innerHTML }}></div>
        </td>
        <td>
          <h2>チャネル</h2>
          <div dangerouslySetInnerHTML={{ __html: channels.innerHTML }}></div>
        </td>
      </tr>
      <tr>
        <td colSpan={6}>
          <h2>収益モデル</h2>
          <div dangerouslySetInnerHTML={{ __html: revenueStreams.innerHTML }}></div>
        </td>
      </tr>
    </table>
  )
}

import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals'

type ReportHandler = (metric: {
  name: string
  value: number
  delta: number
}) => void

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry)
    onFCP(onPerfEntry)
    onINP(onPerfEntry)
    onLCP(onPerfEntry)
    onTTFB(onPerfEntry)
  }
}

export default reportWebVitals

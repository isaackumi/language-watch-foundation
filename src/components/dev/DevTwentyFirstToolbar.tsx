'use client'

import { TwentyFirstToolbar } from '@21st-extension/toolbar-next'
import { ReactPlugin } from '@21st-extension/react'

/**
 * 21st toolbar: connects the running app to your editor AI for element-targeted UI edits.
 * Install the recommended workspace extension (21st.21st-extension) and use Command Palette → setupToolbar if needed.
 */
export function DevTwentyFirstToolbar() {
  return (
    <TwentyFirstToolbar
      config={{ plugins: [ReactPlugin] }}
      enabled={process.env.NODE_ENV === 'development'}
    />
  )
}

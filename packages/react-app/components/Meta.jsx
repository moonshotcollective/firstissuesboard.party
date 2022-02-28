import React from 'react'

export default function Meta() {
  const metaContent = {
    title: 'Tip.Party',
    url: 'https://tip.party',
    description: `Send ETH/Coin tips to multiple members of your community at once with a Tip Party.`,
    image: '',
  }

  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <title>{metaContent.title}</title>
      <meta name="title" content={metaContent.title} />
      <meta name="description" content={metaContent.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaContent.url} />
      <meta property="og:title" content={metaContent.title} />
      <meta property="og:description" content={metaContent.description} />
      {/* <meta property="og:image" content="" /> */}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaContent.url} />
      <meta property="twitter:title" content={metaContent.title} />
      <meta property="twitter:description" content={metaContent.description} />
      {/* <meta property="twitter:image" content="" /> */}
    </>
  )
}

import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt =
    'DreamDisneyAI - AI Generated Disney plans for your next vacation trip';

export default async function OG() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                }}
            >
                <h1
                    style={{
                        fontSize: '100px',
                        margin: '0',
                        backgroundImage:
                            'linear-gradient(90deg, #90C6FA, #DEA98E, #F8E467)',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    Dream Disney{' '}
                    <span
                        style={{
                            border: '4px solid #bcbcbc',
                            borderRadius: '25px',
                            marginLeft: '1.5rem',
                            padding: '.5rem 1rem',
                            backgroundImage:
                                'linear-gradient(90deg, #90C6FA, #F8E467)',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        AI
                    </span>
                </h1>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}

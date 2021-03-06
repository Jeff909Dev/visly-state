import React from 'react'
import Anchor from 'react-scrollable-anchor'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark as theme } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { bgState } from '../../../backend/state'
import { useValue, useMutation } from '@visly/state'

function BackgroundSelect({ backgrounds, selected, onSelect }) {
    return (
        <div className="background-select">
            {backgrounds.map((_, index) => {
                const className =
                    index === selected
                        ? 'select-circle selected'
                        : 'select-circle'
                return (
                    <div
                        key={index}
                        className={className}
                        onClick={() => onSelect(index)}
                    ></div>
                )
            })}
        </div>
    )
}

function Code({ code, background, anchor }) {
    const style = {
        borderRadius: 8,
        padding: 10,
        marginLeft: -20,
        marginRight: -20,

        boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.6)',
    }

    return (
        <div className="code-container">
            <img className="gradient-box" src={`/img/${background}`} />
            <div className="code">
                <SyntaxHighlighter
                    language="jsx"
                    style={theme}
                    customStyle={style}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
            <div className="new-tab">
                <a
                    href={`#${anchor}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Click here to open a new tab
                </a>
            </div>
        </div>
    )
}

function Feature(props) {
    const {
        title,
        anchor,
        summary,
        code,
        icon,
        leftAccessory,
        rightAccessory,
        index,
    } = props
    const backgrounds = [
        'gradient1.png',
        'gradient2.png',
        'gradient3.png',
        'gradient4.png',
    ]

    const bgIndex = useValue(bgState, s => s.backgrounds[index])
    const setBgIndex = useMutation(bgState, (s, newIndex) => {
        s.backgrounds[index] = newIndex
    })

    return (
        <Anchor id={anchor}>
            <div className="feature">
                <div className="feature-summary">
                    <img className="feature-icon" src={`/img/${icon}.svg`} />
                    <h1>{title}</h1>
                    <p>{summary}</p>
                </div>
                <div className="background-select-container">
                    <BackgroundSelect
                        backgrounds={backgrounds}
                        selected={bgIndex}
                        onSelect={setBgIndex}
                    />
                    <Code
                        anchor={anchor}
                        code={code}
                        background={backgrounds[bgIndex]}
                    />
                    {leftAccessory && (
                        <div className="feature-left-accessory">
                            <img src={`/img/${leftAccessory}.svg`} />
                        </div>
                    )}
                    {rightAccessory && (
                        <div className="feature-right-accessory">
                            <img src={`/img/${rightAccessory}.svg`} />
                        </div>
                    )}
                </div>
            </div>
        </Anchor>
    )
}

export default Feature

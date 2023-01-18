import { useState } from 'react'
import { Textarea, Button, Spacer, Container, Modal, Text, Image } from '@nextui-org/react';
import Papa from 'papaparse'

import Twitter from './assets/twitter.png'
import Github from './assets/github.png'
import Linkedin from './assets/linkedin.png'

import './App.css'

function App() {
  const [json, setJson] = useState('')
  const [visible, setVisible] = useState(false);

  const downloadCSV = () => {
    if (!json) {
      setVisible(true)
      return
    }

    const csv = Papa.unparse(json)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', 'data.csv')
    link.click()
  }
  const handler = () => setVisible(true);
  const closeHandler = () => setVisible(false)

  return (
    <div className="App">
      <Container fluid gap={2} css={{ marginBottom: '2rem', textAlign: 'center' }} className='Work-Sans'>
        <Text
          h1
          css={{
            textGradient: "45deg, $blue300 -20%, $purple600 50%",
          }}
          weight="bold"
        >JSON to CSV Converter</Text>
        <Text
          h3
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
          weight="bold"
        >Convert your JSON data to CSV format</Text>
      </Container>
      <Container css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Textarea
          bordered
          color="secondary"
          status='secondary'
          labelPlaceholder="Put your JSON here"
          minRows={10}
          maxRows={10}
          value={json}
          onChange={(e) => setJson(e.target.value)}
          css={{
            '& textarea': {
              width: '300px',
            },
          }}
        />
        <Spacer y={1} />
        <Button
          auto
          color="gradient"
          onPress={downloadCSV}
        >
          Download CSV
        </Button>
      </Container>
      <Container fluid css={{ textAlign: 'center', marginTop: '10px' }} className='Work-Sans'>
        <Text h4>Follow me on</Text>
        <Container css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50%',
          marginTop: '0.4rem'
        }}>
          <Image
            src={Twitter}
            width={30}
            height={30}
            onClick={() => window.open('https://twitter.com/DepressedCoder', '_blank')}
          />
          <Spacer x={1} />
          <Image
            src={Github}
            width={30}
            height={30}
            onClick={() => window.open('http://github.com/AmitSahoo45', '_blank')}
          />
          <Spacer x={1} />
          <Image
            src={Linkedin}
            width={30}
            height={30}
            onClick={() => window.open('https://www.linkedin.com/in/amit-kumar-sahoo-web/', '_blank')}
          />
        </Container>
      </Container>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text
            h4
            size={20}
            css={{
              marginBottom: '15px!important',
              color: '#818589',
            }}
            className='Work-Sans'
            weight="bold"
          >
            Textarea cannot be empty!! Please enter json data to be converted
          </Text>
        </Modal.Header>
      </Modal>
    </div>
  )
}

export default App

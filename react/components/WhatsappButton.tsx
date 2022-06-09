import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')

  return (
    <>
      <div className="fixed bottom-2 right-2 flex flexColumn">
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={logo}
            width={width}
            height={height}
            alt="Logo de whatsApp"
          />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'assets/img/WhatsApp.png',
  phone: '3057066856',
  message: 'prueba...',
  width: 80,
  height: 80,
}

WhatsappButton.schema = {
  title: 'botón de whatsapp',
  type: 'object',
  properties: {
    logo: {
      title: 'logo de whatapp que se relacione con la marca',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Teléfono',
      description: 'Agrega por favor el numero',
      type: 'string',
    },
    message: {
      title: 'Mensaje',
      description: 'Agrega por favor el mensaje que se verá para tu cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Ancho',
      description: 'Agrega por favor el ancho',
      type: 'number',
    },
    height: {
      title: 'Alto',
      description: 'Agrega por favor el alto',
      type: 'number',
    },
  },
}
export default WhatsappButton

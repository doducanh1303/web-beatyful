import React from 'react'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import Whatsappcss from '../commoms/Whatsappcss.css'
function Whatsapp() {
  return (
    <div>
      <WhatsAppWidget phoneNumber='XXXXXXXX' />
    </div>
  )
}

export default Whatsapp

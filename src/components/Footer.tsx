import React from 'react'

const CopyRight: React.FC = () => {
  return (
    <div className="copyright">
      <p>Copyright © 2020 CirKit Co.,Ltd. All Rights Reserved.</p>
    </div>
  )
}

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <CopyRight />
    </div>
  )
}

export default Footer
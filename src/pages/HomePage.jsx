import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
        <h2>Section 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nulla eget tortor facilisis efficitur. Sed blandit, sapien at tincidunt luctus, odio nisl tempus libero, vel lacinia eros lectus a libero.</p>
        
        <h2>Section 2</h2>
        <p>Praesent ut ligula non mi varius sagittis. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.</p>
        
        <h2>Section 3</h2>
        <p>Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
        <Link to='/user/'>Page Users</Link>
    </div>
  )
}

export default HomePage

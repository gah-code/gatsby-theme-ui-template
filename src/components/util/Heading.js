/** @jsxImportSource theme-ui */
const Heading = ({ as: Tag = "h2", children, ...props }) => (
  <Tag sx={{ variant: `styles.${Tag}` }} {...props}>
    {children}
  </Tag>
)

export default Heading

type TProps = {
    icon: string
  }

export default function Icon (props: TProps) {
    if (props.icon === 'arrow') {
        return (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.4375 13.7812L1.1875 8.28125C0.90625 7.96875 0.90625 7.5 1.21875 7.21875C1.53125 6.9375 2 6.9375 2.28125 7.25L6.25 11.4062V0.75C6.25 0.34375 6.5625 0 7 0C7.40625 0 7.75 0.34375 7.75 0.75V11.4062L11.6875 7.25C11.9688 6.9375 12.4688 6.9375 12.75 7.21875C13.0625 7.5 13.0625 7.96875 12.7812 8.28125L7.53125 13.7812C7.375 13.9375 7.1875 14 7 14C6.78125 14 6.59375 13.9375 6.4375 13.7812Z" fill="white"/>
            </svg>
     )
     }
     return null
}   
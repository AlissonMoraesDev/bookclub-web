import { Text, MenuItem } from 'components/atoms'
import { Flex, Avatar, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { BsBookmarkHeart, BsFiletypeDoc } from 'react-icons/bs'
import { FaUserCog, FaUserShield } from 'react-icons/fa'
import { PiDoorOpenDuotone } from 'react-icons/pi'
import { MdOutlinePrivacyTip } from 'react-icons/md'

export const UserMenu = () => {
  const userStore = useSelector((state) => state.user)

  const menuOptions = [
    {
      id: 0,
      icon: BsBookmarkHeart,
      text: 'Favoritos',
      divider: false
    },
    {
      id: 1,
      icon: FaUserCog,
      text: 'Dados Pessoais',
      divider: false
    },
    {
      id: 2,
      icon: FaUserShield,
      text: 'Alterar Senha',
      divider: true
    },
    {
      id: 3,
      icon: BsFiletypeDoc,
      text: 'Termos de uso',
      divider: false
    },
    {
      id: 4,
      icon: MdOutlinePrivacyTip,
      text: 'Politíca de Privacidade',
      divider: true
    },
    {
      id: 5,
      icon: PiDoorOpenDuotone,
      text: 'Logout',
      divider: false
    },
  ]

  console.log({ userStore })
  return (
    <Menu>
      <MenuButton>
        <Flex alignItems="center" justifyContent="center">
          <Avatar 
            name={userStore?.user?.name}
            src={userStore?.user?.avatar_url}
            w={["36px","48px"]}
            h={["36px","48px"]}
            borderWidth="2px"
            bg="brand.grayLight"
            color="brand.black"
            borderColor="brand.primary"
            marginRight={["6px", "8px"]}
            fontWeight="bold"
          />
          <Flex display={["none", "none", "none", "flex"]}>
            <Text fontWeight="bold" fontSize={["14px", "16px"]} >{userStore?.user?.name}</Text>
          </Flex>
          <ChevronDownIcon boxSize="24px"/>
        </Flex>
      </MenuButton>
      <MenuList>
        {menuOptions.map((menuItem) => (
          <MenuItem key={`menu_list_${menuItem.id}`} icon={menuItem.icon} text={menuItem.text} divider={menuItem.divider} />
        ))}
      </MenuList>
    </Menu>
  )
}
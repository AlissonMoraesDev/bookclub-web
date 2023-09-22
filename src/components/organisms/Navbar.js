import { Flex, Image } from "@chakra-ui/react"
import { SearchBar, UserMenu } from "components/molecules"


export const Navbar = () => {
  return (
    <Flex w="100vw" flexDir="row" alignItems="center" justifyContent="space-between" paddingX={["24px","32px","48px","64px","80px", "112px"]} paddingTop={['12px','24px']}>
      <Image src="/img/logo.svg" alt="BookClub Logo" w={["100px", "160px"]} h="48px" />
      <Flex display={["none", "flex"]} mt={['12px', '0px']}  mx={['12px','12px','12px','0px']}>
        <SearchBar />
      </Flex>
      <UserMenu flexDir={["row", "column"]} />
    </Flex>
    )
}
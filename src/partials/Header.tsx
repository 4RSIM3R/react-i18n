import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogPanel } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { IconChevronDown, IconWorld } from "@tabler/icons-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"



export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { t, i18n } = useTranslation();

    const navigation = [
        { name: t('navigation.home'), href: '/' },
        { name: t('navigation.facility'), href: '/facility' },
        { name: t('navigation.gallery'), href: '/gallery' },
        { name: t('navigation.about'), href: '/about-us' },
    ]

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between py-6 px-4 sm:px-0" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Jolotundo</span>
                        <img className="h-9 w-auto" src="https://i.pinimg.com/originals/78/ee/e6/78eee64e81233af7ca4974a552312ae8.png" alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <DropdownMenu  >
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2">
                                <IconWorld className="h-5 w-5" />
                                <span>{i18n.language.toUpperCase()}</span>
                                <IconChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem onClick={() => { i18n.changeLanguage("en") }}>English</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => { i18n.changeLanguage("id") }} >Indonesia</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Jolotundo</span>
                            <img
                                className="h-8 w-auto"
                                src="https://i.pinimg.com/originals/78/ee/e6/78eee64e81233af7ca4974a552312ae8.png"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <DropdownMenu  >
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="flex items-center gap-2">
                                            <IconWorld className="h-5 w-5" />
                                            <span>{i18n.language.toUpperCase()}</span>
                                            <IconChevronDown className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-48">
                                        <DropdownMenuItem onClick={() => { i18n.changeLanguage("en") }}>English</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => { i18n.changeLanguage("id") }} >Indonesia</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )

}
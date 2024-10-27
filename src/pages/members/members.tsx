import { Seo } from "@global/components";
import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes";

import { useEffect, useState } from "react";
import { MembersPageProps } from "./type";
import { TypeNews } from "./components/typeNew";
import { Trash } from "./components/trash";
import { Collaborator } from "./components/collaborator";
import { User } from "./components/user";

export const MembersPage = ({}: MembersPageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    const [indexPage, setIndexPage] = useState(1);

    const changeIndexPage = (index: number) => {
        setIndexPage(index);
    };

    return (
        <>
            <Flex direction="column" align="stretch" style={{ background: "linear-gradient(to right, #f0fff4, #ffffff)", minHeight: "100vh" }}>
                <Flex direction="column" align="center" style={{ margin: "3vh 10vw" }}>
                    {/* <TypeNews style={{ position: "fixed", top: "5vh", zIndex: 2000 }} /> */}
                    <TypeNews changeIndexPage={changeIndexPage} tabIndex={indexPage} />
                </Flex>
                {indexPage === 1 && <Trash />}
                {indexPage === 2 && <Collaborator />}
                {indexPage === 3 && <User />}
            </Flex>

            <Seo title="Members" />
        </>
    );
};

// Using for lazy loading page
export default MembersPage;
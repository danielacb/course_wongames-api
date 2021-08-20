import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`;

const HomePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/danielacb/repos")
      .then((res) =>
        setRows(
          res.data.filter((repo) => repo.name.startsWith("course_wongames"))
        )
      )
      .catch((e) =>
        strapi.notification.toggle({
          type: "warning",
          message: `Ops...github API error, ${e}`,
        })
      );
  }, []);

  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  return (
    <Wrapper>
      <Header
        title={{ label: "React Avançado Repositories" }}
        content="A list of all respositories in React Avançado course."
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);

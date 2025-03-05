import type { Project } from "../../types/Project.type";

export async function getGitHubProjects(token: string, page: number = 0, limit: number = 0): Promise<Project[]> {
  const pagination = `?per_page=${limit}&page=${page}`;
  const response = await fetch(`https://api.github.com/user/repos${pagination}`, {
    headers: {
      Authorization: `token ${token}`
    }
  });

  if (!response.ok) {
    throw new Error(`Error fetching GitHub projects: ${response.status} ${response.statusText}`);
  }
  const result: Project[] = await response.json();
  return result;
}

export async function getInfoByUrl(url: string, token: string) {
  const response = await fetch(
    url,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Error fetching: ${response.status} ${response.statusText}`
    );
  }

  return await response.json();
}
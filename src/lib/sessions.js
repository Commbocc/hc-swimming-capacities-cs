import { reactive } from "vue";
import airtable from "./airtable";

export const sessions = reactive({
  error: "",
  loading: false,
  data: [],
});

export async function fetchSessions(slug) {
  sessions.loading = true;
  try {
    const { data } = await airtable.get(`/sessions`, {
      params: {
        filterByFormula: `ARRAYJOIN({LocationSlug}) = '${slug}'`,
        view: "Grid view",
      },
    });

    sessions.data = data.records;
  } catch (error) {
    // error
    // 401 unauth
    // 422 (Unprocessable Entity)

    sessions.error = error.message;
  } finally {
    sessions.loading = false;
  }
}

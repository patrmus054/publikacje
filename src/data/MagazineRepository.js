import instance from "./client";

const limit = 10;

export async function getMagazines(
  page,
  title = undefined,
  minPoints = undefined,
  maxPoints = undefined
) {
  try {
    const params = buildParams({ page, title, minPoints, maxPoints });

    const apiResponse = await instance.get("/magazines/", {
      params: {
        ...params,
        limit,
        page,
      },
    });
    const convertedMagazines = apiResponse.data.magazines.map((item) => {
      const points = item.Points.map((pointsItem) => {
        const point = { Value: pointsItem.Value };
        return point;
      });
      const magazine = {
        _id: item._id,
        Title1: item.Title1,
        Title2: item.Title2,
        issn: item.issn,
        e_issn: item.e_issn,
        Points: points,
      };
      return magazine;
    });
    let response;
    if (apiResponse.data.next != undefined) {
      response = { hasNext: true, magazines: convertedMagazines };
    } else {
      response = { hasNext: false, magazines: convertedMagazines };
    }
    return response;
  } catch (error) {
    console.error(error);
  }
}

function buildParams(params) {
  const { title, minPoints, maxPoints } = params;
  const newParams = { page: params.page };

  if (title != undefined && title != "") {
    newParams["title"] = title;
  }
  if (minPoints != undefined) {
    newParams["minPoints"] = minPoints;
  }
  if (maxPoints != undefined) {
    newParams["maxPoints"] = maxPoints;
  }
  return newParams;
}

export async function getMagazineById(id) {
  try {
    const magazineResponse = await instance.get(`/magazines/${id}`);

    const receivedMagazine = magazineResponse.data;
    const points = receivedMagazine.Points.map((pointsItem) => {
      const point = {
        Value: pointsItem.Value,
        _id: pointsItem._id,
        Year: pointsItem.Year,
      };
      return point;
    });

    const magazine = {
      _id: receivedMagazine._id,
      Title1: receivedMagazine.Title1,
      Title2: receivedMagazine.Title2,
      issn: receivedMagazine.issn,
      e_issn: receivedMagazine.e_issn,
      Points: points,
      Categories: receivedMagazine.Categories,
      issn2: receivedMagazine.issn2,
      e_issn2: receivedMagazine.e_issn2,
    };

    return magazine;
  } catch (error) {
    console.error(error);
  }
}

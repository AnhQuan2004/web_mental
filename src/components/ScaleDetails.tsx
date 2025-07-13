import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ScaleDetailsProps {
  domainId: string | null;
}

const ScaleDetails: React.FC<ScaleDetailsProps> = ({ domainId }) => {
  if (!domainId) return null;

  const bdiDetails = (
    <div>
      <p className="font-semibold">Thang Đo Trầm Cảm Beck (BDI)</p>
      <ul className="list-disc pl-5 mt-2 text-sm">
        <li>0-13: Không có hoặc rất ít triệu chứng trầm cảm.</li>
        <li>14-19: Trầm cảm mức độ nhẹ.</li>
        <li>20-29: Trầm cảm mức độ vừa.</li>
        <li>≥30: Trầm cảm mức độ nặng.</li>
      </ul>
    </div>
  );

  const phq9Details = (
    <div>
      <p className="font-semibold">Bộ Câu Hỏi Sức Khỏe Bệnh Nhân (PHQ-9)</p>
      <ul className="list-disc pl-5 mt-2 text-sm">
        <li>0-4 điểm: Bình thường / Không có triệu chứng trầm cảm.</li>
        <li>5-9 điểm: Trầm cảm tối thiểu / Trầm cảm nhẹ.</li>
        <li>10-14 điểm: Trầm cảm nhẹ / Trầm cảm vừa.</li>
        <li>15-19 điểm: Trầm cảm trung bình / Trầm cảm khá nặng.</li>
        <li>≥20 điểm: Trầm cảm nặng.</li>
      </ul>
    </div>
  );

  const dass21Details = (
    <div>
      <p className="font-semibold">Thang Đo Trầm Cảm - Lo Âu - Stress (DASS-21)</p>
      <p className="text-sm mt-2">Điểm số cuối cùng cho mỗi tiểu thang sẽ nằm trong khoảng từ 0 đến 42. Dưới đây là các ngưỡng phân loại mức độ cho tiểu thang Trầm cảm:</p>
      <ul className="list-disc pl-5 mt-2 text-sm">
        <li>0-9: Bình thường</li>
        <li>10-13: Nhẹ</li>
        <li>14-20: Vừa</li>
        <li>21-27: Nặng</li>
        <li>≥28: Rất nặng</li>
      </ul>
      <p className="text-sm mt-2">Để báo cáo được toàn diện, các ngưỡng điểm cho Lo âu và Stress cũng được trình bày:</p>
      <ul className="list-disc pl-5 mt-2 text-sm">
        <li>Lo âu: 0-7 (Bình thường), 8-9 (Nhẹ), 10-14 (Vừa), 15-19 (Nặng), ≥20 (Rất nặng).</li>
        <li>Stress: 0-14 (Bình thường), 15-18 (Nhẹ), 19-25 (Vừa), 26-33 (Nặng), ≥34 (Rất nặng).</li>
      </ul>
    </div>
  );

  const sdsDetails = (
    <div>
      <p className="font-semibold">Thang Tự Đánh Giá Trầm Cảm Zung (SDS)</p>
      <p className="text-sm mt-2">Dưới đây là các ngưỡng phân loại dựa trên cả hai hệ thống điểm, được công nhận quốc tế:</p>
      <p className="font-semibold mt-2">Hệ thống 1 (Dựa trên Chỉ số Zung 25-100):</p>
      <ul className="list-disc pl-5 mt-2 text-sm">
        <li>25-49: Bình thường (Normal Range)</li>
        <li>50-59: Trầm cảm nhẹ (Mildly Depressed)</li>
        <li>60-69: Trầm cảm vừa (Moderately Depressed)</li>
        <li>≥70: Trầm cảm nặng (Severely Depressed)</li>
      </ul>
      <p className="font-semibold mt-2">Hệ thống 2 (Dựa trên Điểm thô 20-80):</p>
      <ul className="list-disc pl-5 mt-2 text-sm">
        <li>20-44: Bình thường (Normal Range)</li>
        <li>45-59: Trầm cảm nhẹ (Mildly Depressed)</li>
        <li>60-69: Trầm cảm vừa (Moderately Depressed)</li>
        <li>≥70: Trầm cảm nặng (Severely Depressed)</li>
      </ul>
    </div>
  );

  const hamdDetails = (
    <div>
      <p className="font-semibold">Thang Đánh Giá Trầm Cảm Hamilton (HAM-D)</p>
      <p className="text-sm mt-2">Các ngưỡng điểm sau đây được nhiều tác giả chấp thuận và sử dụng rộng rãi để phân loại mức độ nặng của hội chứng trầm cảm:</p>
      <ul className="list-disc pl-5 mt-2 text-sm">
        <li>0-7 điểm: Không có trầm cảm.</li>
        <li>8-13 điểm: Trầm cảm nhẹ.</li>
        <li>14-18 điểm: Trầm cảm vừa.</li>
        <li>19-22 điểm: Trầm cảm nặng.</li>
        <li>≥23 điểm: Trầm cảm rất nặng.</li>
      </ul>
    </div>
  );

  const getDetails = () => {
    switch (domainId) {
      case "bdi":
        return bdiDetails;
      case "phq9":
        return phq9Details;
      case "dass21":
        return dass21Details;
      case "sds":
        return sdsDetails;
      case "hamd":
        return hamdDetails;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chi tiết thang đo</CardTitle>
      </CardHeader>
      <CardContent>
        {getDetails()}
      </CardContent>
    </Card>
  );
};

export default ScaleDetails;
